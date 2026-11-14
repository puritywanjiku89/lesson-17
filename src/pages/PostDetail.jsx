import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'
import LoadingSpinner from '../components/shared/LoadingSpinner.jsx'
import ErrorMessage from '../components/shared/ErrorMessage.jsx'

export default function PostDetail(){
  const { id } = useParams()
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (loading) return <LoadingSpinner text="Loading post…" />
  if (error) return <ErrorMessage message={error} />
  if (!post || !post.id) return <p>No post found.</p>
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/posts">← Back to Posts</Link>
    </div>
  )
}
