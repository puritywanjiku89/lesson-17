export default function ErrorMessage({ message, onRetry }) {
  return <div><p>⚠️ Something went wrong: {message}</p>{onRetry && <button onClick={onRetry}>Try Again</button>}</div>
}
