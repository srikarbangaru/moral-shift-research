export default function DarkDivider() {
  const stats = [
    { value: '15/15', label: 'DeepSeek reversed every single answer when told that experts disagreed with it', color: '#f87171' },
    { value: '7/15',  label: 'Claude reversed answers under an Ethical Reminder - the strategy designed to prevent reversals', color: '#fbbf24' },
    { value: '0',     label: 'Strategies that caused no reversals in any model - every approach triggered some change', color: '#a5b4fc' },
    { value: '9/15',  label: 'Gemini reversed on average 9 of 15 questions, no matter which strategy we applied', color: '#c4b5fd' },
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
        <p className="text-xs font-semibold uppercase tracking-widest text-center mb-2" style={{ color: '#a5b4fc' }}>
          What we found
        </p>
        <p className="text-center text-sm mb-10" style={{ color: '#9ca3af' }}>
          Specific numbers from our results, expressed as questions reversed out of 15.
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
