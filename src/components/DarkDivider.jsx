export default function DarkDivider() {
  const stats = [
    { value: '100%', label: 'We found DeepSeek changed its answer on every single question under persuasion', color: '#f87171' },
    { value: '47%',  label: 'We observed Claude shifting when we applied an ethical reminder - the strategy designed to prevent it', color: '#fbbf24' },
    { value: '0',    label: 'We found zero strategies that fully preserved a model\'s baseline answers', color: '#a5b4fc' },
    { value: '56%',  label: 'We measured Gemini shifting on over half of all questions across every strategy we tested', color: '#c4b5fd' },
  ];

  return (
    <div
      className="relative overflow-hidden py-14"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-center mb-2" style={{ color: '#4b5563' }}>
          What we found
        </p>
        <p className="text-center text-sm mb-10" style={{ color: '#6b7280' }}>
          Four findings from our research that surprised us most.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold mb-3" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
