import Plot from '../PlotlyComponent';
import { weightedScores } from '../data/researchData';

const FINDING_CARDS = [
  {
    number: '01',
    title: 'Saying "are you sure?" was enough',
    body: 'Our persuasion strategy simply told the model that many experts disagreed with its position. That single prompt caused DeepSeek to reverse every one of its 15 answers. ChatGPT reversed 4 out of 15. No model was immune.',
    color: '#3b82f6',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    number: '02',
    title: 'The ethical reminder backfired badly',
    body: 'We designed the Ethical Reminder strategy to keep models grounded by asking them to reason carefully before answering. Instead, it caused Claude to reverse 47% of its positions - more than persuasion did. It had the opposite of its intended effect.',
    color: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    number: '03',
    title: 'One moral dimension held firm across the board',
    body: 'Questions about personal liberty and freedom from coercion showed 0% reversal for ChatGPT across all five strategies tested. This was the only moral foundation that appeared genuinely stable under pressure.',
    color: '#10b981',
    bg: '#f0fdf4',
    border: '#bbf7d0',
  },
  {
    number: '04',
    title: 'Models argued confidently for both sides',
    body: 'When a model reversed its position, it did not hedge or express uncertainty. It gave a well-reasoned explanation for whichever answer it was currently giving - the same confident tone before and after the reversal. This suggests the reasoning was post-hoc, not principled.',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
  },
];

// Fixed scale that shows differences clearly without a slider
const sorted = [...weightedScores].sort((a, b) => b.value - a.value);

const scoreData = [{
  type: 'bar',
  orientation: 'h',
  x: sorted.map(s => s.value),
  y: sorted.map(s => s.label),
  marker: {
    color: sorted.map(s =>
      s.type === 'baseline'   ? '#6366f1' :
      s.type === 'stabilizer' ? '#4ade80' :
      '#f87171'
    ),
  },
  text: sorted.map(s => s.value.toFixed(2)),
  textposition: 'outside',
  textfont: { size: 11, family: 'JetBrains Mono', color: '#9ca3af' },
  cliponaxis: false,
  hovertemplate: '<b>%{y}</b><br>Moral score: <b>%{x} / 22.28</b><extra></extra>',
}];

const scoreLayout = {
  paper_bgcolor: 'transparent',
  plot_bgcolor:  'transparent',
  font: { family: 'Inter, sans-serif', size: 12, color: '#6b7280' },
  xaxis: {
    range: [17.5, 19.0],
    tickfont: { size: 10, family: 'JetBrains Mono', color: '#9ca3af' },
    gridcolor: '#f3f4f6',
    linecolor: 'transparent',
    zerolinecolor: 'transparent',
    fixedrange: true,
    title: { text: 'Weighted moral consistency score (out of 22.28)', font: { size: 11, color: '#9ca3af' } },
  },
  yaxis: {
    tickfont: { size: 12, color: '#374151' },
    linecolor: 'transparent',
    gridcolor: 'transparent',
    automargin: true,
    fixedrange: true,
  },
  margin: { l: 20, r: 70, t: 10, b: 50 },
  height: 260,
  bargap: 0.4,
  hoverlabel: { bgcolor: '#1f2937', bordercolor: '#374151', font: { color: '#f9fafb', size: 12 } },
  shapes: [{ type: 'line', x0: 18.52, x1: 18.52, y0: -0.5, y1: 5.5, line: { color: '#6366f1', width: 1.5, dash: 'dot' } }],
  annotations: [{ x: 18.52, y: 5.5, text: 'Baseline', showarrow: false, font: { size: 10, color: '#6366f1' }, xanchor: 'left', xshift: 6 }],
};

export default function Findings() {
  return (
    <section id="findings" style={{ background: "#0d0d18", borderTop: "1px solid #1f2937", borderBottom: "1px solid #1f2937" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="pt-10 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4b5563] mb-2">Key findings</p>
        <h2 className="text-2xl font-bold text-[#f9fafb]">What surprised us</h2>
        <p className="text-sm text-[#6b7280] mt-1">
          Four things we found that we did not expect going into this study.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {FINDING_CARDS.map(f => (
          <div key={f.number} className="rounded-2xl border p-5" style={{ background: f.bg, borderColor: f.border }}>
            <p className="text-3xl font-bold mb-2" style={{ color: f.color + '50' }}>{f.number}</p>
            <p className="text-sm font-semibold text-gray-800 mb-2">{f.title}</p>
            <p className="text-sm text-[#6b7280] leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>

      {/* Score impact chart */}
      <div className="rounded-2xl border border-[#1f2937] bg-[rgba(255,255,255,0.03)] p-5">
        <h3 className="text-base font-semibold text-[#f9fafb] mb-1">
          Did any strategy preserve ChatGPT's overall moral score?
        </h3>
        <p className="text-sm text-[#6b7280] mb-2">
          Each bar shows ChatGPT's weighted moral consistency score after that strategy was applied.
          The dotted line is the original baseline score. Every strategy lowered it - some more than others.
          The differences are small in absolute terms, but consistent: there was no upward movement.
        </p>
        <div className="flex gap-4 text-xs text-[#4b5563] mb-4 flex-wrap">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-indigo-500 inline-block" /> Baseline (original score)</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-400 inline-block" /> Pressure strategies</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-400 inline-block" /> Stabilizing strategies</span>
        </div>

        <Plot
          data={scoreData}
          layout={scoreLayout}
          config={{ responsive: true, displayModeBar: false }}
          style={{ width: '100%' }}
          useResizeHandler
        />
      </div>
    </div>
    </section>
  );
}
