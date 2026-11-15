import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';
import CreatePost from '../components/CreatePost';
import Card from '../components/shared/Card/Card';
import Button from '../components/shared/Button/Button';
import Modal from '../components/shared/Modal/Modal';

export default function Posts() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [localPosts, setLocalPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const allPosts = [...localPosts, ...(posts || []).slice(0, 10)];

  if (loading) return <LoadingSpinner text="Loading posts..." />;
  if (error) return <ErrorMessage message={error} />;
  if (!posts || !posts.length) return <p>No posts found.</p>;

  return (
    <div>
      <h1>Posts</h1>
      <CreatePost onAddPost={(p) => setLocalPosts(prev => [p, ...prev])} />
      <Button variant="secondary" onClick={() => setShowModal(true)}>About this page</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="About Posts">
        <p>Posts come from JSONPlaceholder. New posts you create are saved locally.</p>
      </Modal>
      <div aria-live="polite" style={{ marginTop: '1rem' }}>
        {allPosts.map(p => (
          <Card key={p.id} title={p.title}>
            <p>{p.body}</p>
            <Link to={`/posts/${p.id}`}>View details</Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
