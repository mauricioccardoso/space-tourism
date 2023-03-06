import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export function NotFound() {
  return (
    <main className={styles.mainContainer}>
      <h1>Page Not Found</h1>
      <Link to="/"> Back Home </Link>
    </main>
  );
}
