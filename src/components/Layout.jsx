import { Link, Outlet } from 'react-router-dom'
export default function Layout(){
  return (<div><nav style={{display:'flex',gap:16,padding:12,background:'#111',color:'#fff'}}><Link to="/" style={{color:'#fff'}}>Home</Link><Link to="/posts" style={{color:'#fff'}}>Posts</Link><Link to="/about" style={{color:'#fff'}}>About</Link></nav><main style={{padding:16}}><Outlet/></main></div>)
}
