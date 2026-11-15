export default function Input({ label, name, error, ...rest }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name} style={{ display: 'block', marginBottom: '.25rem', fontWeight: '600' }}>{label}</label>
      <input id={name} name={name} {...rest} style={{ width: '100%', padding: '.6rem', borderRadius: '6px', border: '1px solid #ccc' }} />
      {error && <span style={{ color: '#b91c1c', fontSize: '.9rem' }}>{error}</span>}
    </div>
  );
}
