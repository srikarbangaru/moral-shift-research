export default function DarkDivider() {
  const stats = [
    {
      value: '300',
      label: 'Total trials',
      sub: '15 questions × 5 strategies × 4 models, each evaluated by human reviewers',
      color: '#a5b4fc',
    },
    {
      value: '100%',
      label: 'DeepSeek under persuasion',
      sub: 'Reversed every single one of its 15 answers when told experts disagreed',
      color: '#f87171',
    },
    {
      value: '6 / 20',
      label: 'Q5, Q7, Q11 reversal rate',
      sub: 'The three most pressure-sensitive questions triggered reversals in 6 of 20 model-strategy pairs',
      color: '#fbbf24',
    },
    {
      value: '2 clusters',
      label: 'Stable vs. unstable',
      sub: 'ChatGPT + Claude (8–25% shift) vs. DeepSeek + Gemini (32–56% shift) — two distinct behavioral archetypes',
      color: '#34d399',
    },
  ];

  return (
    <div
      className="relative overflow-hidden py-16"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-center mb-2" style={{ color: '#a5b4fc' }}>
          By the numbers
        </p>
        <p className="text-center text-sm mb-10" style={{ color: '#9ca3af' }}>
          Summary statistics from 300 human-reviewed trials.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.value} className="text-center">
              <p className="text-3xl font-bold font-mono mb-2" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs font-semibold mb-1" style={{ color: '#e5e7eb' }}>{s.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
