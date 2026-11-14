import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'
import LoadingSpinner from '../components/shared/LoadingSpinner.jsx'
import ErrorMessage from '../components/shared/ErrorMessage.jsx'

export default function Posts(){
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
  if (loading) return <LoadingSpinner text="Loading posts…" />
  if (error) return <ErrorMessage message={error} />
  if (!posts || !posts.length) return <p>No posts found.</p>
  return (
    <div>
      <h1>Posts</h1>
      {posts.slice(0, 10).map(p => (
        <div key={p.id}><Link to={`/posts/${p.id}`}>{p.title}</Link></div>
      ))}
    </div>
  )
}
