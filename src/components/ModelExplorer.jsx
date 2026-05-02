import { useState } from 'react';
import Plot from '../PlotlyComponent';
import { MODELS, STRATEGIES, STRATEGY_TYPE, driftRates, modelInfo } from '../data/researchData';
import ModelLogo from './ModelLogo';

// Which questions each model reversed on, per strategy (out of 15)
const questionCount = (rate) => Math.round(rate * 15);

export default function ModelExplorer() {
  const [active,   setActive]   = useState('ChatGPT');
  const [chartKey, setChartKey] = useState(0);

  const selectModel = (m) => { setActive(m); setChartKey(k => k + 1); };

  const info  = modelInfo[active];
  const rates = driftRates[active].map(v => Math.round(v * 100));

  const inducerIdx    = STRATEGIES.map((s, i) => STRATEGY_TYPE[s] === 'inducer'    ? i : null).filter(i => i !== null);
  const stabilizerIdx = STRATEGIES.map((s, i) => STRATEGY_TYPE[s] === 'stabilizer' ? i : null).filter(i => i !== null);

  const data = [
    {
      type: 'bar',
      name: 'Pressure strategies (designed to induce shift)',
      x: inducerIdx.map(i => STRATEGIES[i]),
      y: inducerIdx.map(i => rates[i]),
      width: inducerIdx.map(() => 0.5),
      marker: { color: info.color + 'cc', line: { color: info.color, width: 1.5 } },
      text: inducerIdx.map(i => `${questionCount(driftRates[active][i])} of 15 questions reversed`),
      textposition: 'outside',
      textfont: { size: 10, color: '#6b7280', family: 'Inter' },
      cliponaxis: false,
      showlegend: true,
      hovertemplate: '<b>%{x}</b><br>Reversed on <b>%{y}%</b> of questions<br>(%{text})<extra></extra>',
    },
    {
      type: 'bar',
      name: 'Stabilizing strategies (designed to prevent shift)',
      x: stabilizerIdx.map(i => STRATEGIES[i]),
      y: stabilizerIdx.map(i => rates[i]),
      width: stabilizerIdx.map(() => 0.5),
      marker: { color: '#16a34acc', line: { color: '#15803d', width: 2 } },
      text: stabilizerIdx.map(i => `${questionCount(driftRates[active][i])} of 15 questions reversed`),
      textposition: 'outside',
      textfont: { size: 10, color: '#15803d', family: 'Inter' },
      cliponaxis: false,
      showlegend: true,
      hovertemplate: '<b>%{x}</b><br>Reversed on <b>%{y}%</b> of questions<br>(%{text})<extra></extra>',
    },
  ];

  const layout = {
    paper_bgcolor: 'transparent',
    plot_bgcolor:  'transparent',
    font: { family: 'Inter, sans-serif', size: 12, color: '#6b7280' },
    xaxis: {
      tickfont: { size: 12, color: '#374151' },
      linecolor: '#e5e7eb',
      gridcolor: 'transparent',
      fixedrange: true,
    },
    yaxis: {
      range: [0, 118],
      ticksuffix: '%',
      title: { text: '% of questions where model reversed its position', font: { size: 11, color: '#9ca3af' } },
      tickfont: { size: 11, family: 'JetBrains Mono', color: '#9ca3af' },
      gridcolor: '#f3f4f6',
      linecolor: 'transparent',
      zerolinecolor: '#e5e7eb',
      fixedrange: true,
    },
    legend: {
      orientation: 'h',
      x: 0.5, xanchor: 'center',
      y: -0.28,
      font: { size: 11 },
      bgcolor: 'transparent',
    },
    margin: { l: 60, r: 24, t: 16, b: 90 },
    height: 340,
    bargap: 0.4,
    transition: { duration: 400, easing: 'cubic-in-out' },
    hoverlabel: { bgcolor: '#1f2937', bordercolor: '#374151', font: { color: '#f9fafb', size: 12 } },
    annotations: [
      { x: STRATEGIES[3], y: -16, text: 'STABILIZER', showarrow: false, font: { size: 9, color: '#15803d', family: 'JetBrains Mono' }, xref: 'x', yref: 'y' },
      { x: STRATEGIES[4], y: -16, text: 'STABILIZER', showarrow: false, font: { size: 9, color: '#15803d', family: 'JetBrains Mono' }, xref: 'x', yref: 'y' },
    ],
  };

  return (
    <section id="explore" className="max-w-5xl mx-auto px-6 py-10">
      <div className="border-t border-gray-200 pt-10 mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Explore by model</p>
        <h2 className="text-2xl font-bold text-gray-900">How often did each model reverse its position?</h2>
        <p className="text-sm text-gray-500 mt-1 max-w-2xl">
          Each bar shows the percentage of questions where the model gave a different answer after that strategy was applied.
          A higher bar means the model was less consistent.
        </p>
      </div>

      {/* Model picker */}
      <div className="flex flex-wrap gap-3 mb-6">
        {MODELS.map(m => {
          const mi = modelInfo[m];
          const isActive = m === active;
          return (
            <button
              key={m}
              onClick={() => selectModel(m)}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200"
              style={{
                background:  isActive ? mi.bg     : 'white',
                borderColor: isActive ? mi.border : '#e5e7eb',
                color:       isActive ? mi.color  : '#6b7280',
                boxShadow:   isActive ? `0 0 0 2px ${mi.border}` : 'none',
              }}
            >
              <ModelLogo model={m} size={18} />
              {mi.logoType === 'icon' ? m : null}
            </button>
          );
        })}
      </div>

      {/* Card */}
      <div
        key={active}
        className="bg-white rounded-2xl border shadow-sm overflow-hidden animate-slide-up"
        style={{ borderColor: info.border }}
      >
        {/* Model header */}
        <div className="px-6 pt-5 pb-4" style={{ background: info.bg }}>
          <div className="flex items-center gap-4 mb-2">
            <ModelLogo model={active} size={28} />
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: info.color + '20', color: info.color }}>
              {info.tagline}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-2xl">{info.summary}</p>
        </div>

        {/* Chart */}
        <div className="px-4 pb-2 pt-4">
          <Plot
            key={chartKey}
            data={data}
            layout={layout}
            config={{ responsive: true, displayModeBar: false }}
            style={{ width: '100%' }}
            useResizeHandler
          />
        </div>

        {/* Reading guide */}
        <div className="mx-6 mb-5 rounded-xl p-4 text-sm bg-gray-50 border border-gray-100 space-y-1">
          <p className="font-medium text-gray-700">How to read this chart</p>
          <p className="text-gray-500">
            The y-axis shows what percentage of the 15 moral questions the model answered differently after that strategy was applied.
            A 0% bar means the model held its position completely. A 100% bar means it reversed every single answer.
            Green bars are the stabilizing strategies, which were meant to keep the model consistent. When those bars are tall, it means even the "fix" made things worse.
          </p>
        </div>
      </div>
    </section>
  );
}
