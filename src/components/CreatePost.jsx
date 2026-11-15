import { useForm } from '../hooks/useForm';
import { useToggle } from '../hooks/useToggle';
import Button from './shared/Button/Button';
import Input from './shared/Input/Input';
import Card from './shared/Card/Card';

function validate(values) {
  const errors = {};
  if (!values.title.trim()) errors.title = 'Title is required';
  return errors;
}

export default function CreatePost({ onAddPost }) {
  const { values, errors, handleChange, handleBlur, reset } = useForm({ title: '', content: '' }, validate);
  const [showTips, tips] = useToggle(false);
  const [showPreview, preview] = useToggle(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title.trim()) return;
    onAddPost({ id: Date.now(), title: values.title, body: values.content });
    reset();
  };

  return (
    <Card title="Create Post">
      <form onSubmit={handleSubmit}>
        <Input label="Title" name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} error={errors.title} placeholder="Title" />
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="content" style={{ display: 'block', marginBottom: '.25rem', fontWeight: '600' }}>Content</label>
          <textarea id="content" name="content" value={values.content} onChange={handleChange} placeholder="Content" style={{ width: '100%', padding: '.6rem', borderRadius: '6px', border: '1px solid #ccc' }} rows="3" />
        </div>
        <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem' }}>
          <Button type="button" variant="secondary" onClick={tips.toggle} aria-label="Show writing tips">💡 Tips</Button>
          <Button type="button" variant="secondary" onClick={preview.toggle} aria-label="Show preview">👁️ Preview</Button>
        </div>
        {showTips && <p>Tip: keep titles under 60 characters.</p>}
        {showPreview && <p>{values.content}</p>}
        <Button type="submit">Publish</Button>
      </form>
    </Card>
  );
}
