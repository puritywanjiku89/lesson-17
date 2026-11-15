import { useEffect } from 'react';
export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return <div role="dialog" aria-modal="true" aria-labelledby="modal-title" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', maxWidth: '500px', width: '90%' }}><h2 id="modal-title">{title}</h2>{children}<button onClick={onClose} aria-label="Close dialog" style={{ marginTop: '1rem' }}>Close</button></div></div>;
}
