import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/"> Back Home </Link>
    </>
  );
}
