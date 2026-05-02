export default function Header() {
  return (
    <header
      className="sticky top-0 z-40"
      style={{ background: 'rgba(7,7,15,0.9)', borderBottom: '1px solid #1f2937', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: '#e5e7eb', fontFamily: "'Space Grotesk', sans-serif" }}>
          Moral Shift Research
        </span>
        <nav className="hidden sm:flex gap-6 text-xs font-medium uppercase tracking-widest">
          {[['#explore','Explore'],['#scatter','Questions'],['#compare','Compare'],['#stabilizers','Stabilizers'],['#findings','Findings']].map(([href, label]) => (
            <a key={href} href={href} className="transition-colors hover:text-indigo-400" style={{ color: '#6b7280' }}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
