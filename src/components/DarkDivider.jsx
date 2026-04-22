export default function DarkDivider({ quote, author }) {
  return (
    <div
      className="relative overflow-hidden py-12"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4">
          <div className="w-10 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)' }} />
        </div>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ color: '#c7d2fe' }}>
          &ldquo;{quote}&rdquo;
        </p>
        {author && (
          <p className="mt-4 text-xs uppercase tracking-widest font-semibold" style={{ color: '#6b7280' }}>
            {author}
          </p>
        )}
      </div>
    </div>
  );
}
