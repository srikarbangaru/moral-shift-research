import { NavLink } from 'react-router-dom';

const NAV = [
  { to: '/',          label: 'Home' },
  { to: '/explore',   label: 'Explore' },
  { to: '/questions', label: 'Questions' },
  { to: '/compare',   label: 'Compare' },
  { to: '/findings',  label: 'Findings' },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40"
      style={{ background: 'rgba(7,7,15,0.92)', borderBottom: '1px solid #1f2937', backdropFilter: 'blur(18px)' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="text-sm font-semibold transition-colors hover:text-indigo-400" style={{ color: '#e5e7eb', fontFamily: "'Space Grotesk', sans-serif" }}>
          Moral Shift Research
        </NavLink>
        <nav className="hidden sm:flex gap-1">
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-widest transition-all duration-150"
              style={({ isActive }) => ({
                color:      isActive ? '#a5b4fc' : '#6b7280',
                background: isActive ? 'rgba(99,102,241,0.15)' : 'transparent',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        {/* Mobile: hamburger placeholder — simple select */}
        <div className="sm:hidden">
          <select
            onChange={e => { window.location.href = e.target.value; }}
            className="text-xs rounded-lg px-2 py-1.5 border"
            style={{ background: '#111827', color: '#e5e7eb', borderColor: '#374151' }}
          >
            {NAV.map(({ to, label }) => <option key={to} value={to}>{label}</option>)}
          </select>
        </div>
      </div>
    </header>
  );
}
