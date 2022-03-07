import './index.scss';

function NotFound({ msg }) {
  return (
    <div className="not-found">
      {msg ? <h2>{msg}</h2> : <h2>Page not found</h2>}
    </div>
  );
}

export default NotFound;
