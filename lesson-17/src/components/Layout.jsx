import { Outlet, NavLink } from 'react-router-dom';
export default function Layout() {
  return (
    <div style={{fontFamily:'sans-serif', maxWidth:800, margin:'0 auto', padding:20}}>
      <nav style={{display:'flex', gap:15, marginBottom:20}}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
