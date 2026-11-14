import { Link } from 'react-router-dom';
const posts=[{id:'1',title:'First Post'},{id:'2',title:'Second Post'},{id:'3',title:'Third Post'}];
export default function Posts(){
  return <><h1>Posts</h1>{posts.map(p=><div key={p.id}><Link to={`/posts/${p.id}`}>{p.title}</Link></div>)}</>;
}
