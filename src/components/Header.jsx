export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{ background: 'rgba(9,9,15,0.95)', borderColor: '#1f2937', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
          >
            <span className="text-white text-xs font-bold">M</span>
          </div>
          <span className="text-sm font-semibold" style={{ color: '#e5e7eb' }}>Moral Shift Research</span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#explore"      className="transition-colors hover:text-indigo-400" style={{ color: '#6b7280' }}>Explore</a>
          <a href="#compare"      className="transition-colors hover:text-indigo-400" style={{ color: '#6b7280' }}>Compare</a>
          <a href="#stabilizers"  className="transition-colors hover:text-indigo-400" style={{ color: '#6b7280' }}>Stabilizers</a>
          <a href="#findings"     className="transition-colors hover:text-indigo-400" style={{ color: '#6b7280' }}>Findings</a>
        </nav>
      </div>
    </header>
  );
}
