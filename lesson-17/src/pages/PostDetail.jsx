import { useParams, Link } from 'react-router-dom';
export default function PostDetail(){
  const { postId } = useParams();
  return <><h1>Post {postId}</h1><p>This is post {postId} detail page.</p><Link to="/posts">Back to Posts</Link></>;
}
