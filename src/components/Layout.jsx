import { Outlet, Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Layout() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const isDark = theme === 'dark';
  return (
    <div style={{ background: isDark ? '#111' : 'white', color: isDark ? '#fff' : '#111', minHeight: '100vh' }}>
      <nav style={{ display: 'flex', gap: 16, padding: 12, background: '#111', color: '#fff', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff' }}>Home</Link>
        <Link to="/posts" style={{ color: '#fff' }}>Posts</Link>
        <Link to="/about" style={{ color: '#fff' }}>About</Link>
        <button onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label="Toggle theme" style={{ marginLeft: 'auto' }}>{isDark ? '☀️ Light' : '🌙 Dark'}</button>
      </nav>
      <main style={{ padding: 16 }}><Outlet /></main>
    </div>
  );
}
