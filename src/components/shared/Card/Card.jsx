export default function Card({ title, children, variant='default' }) {
  return <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', background: variant==='highlight' ? '#eff6ff' : 'white' }}>{title && <h3>{title}</h3>}{children}</div>;
}
