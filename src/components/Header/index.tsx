import Logo from '../../assets/icon.svg';
import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerNavbar}>
      <div className={styles.headerContent}>
        <img src={Logo} alt="Logotipo" />
        <hr />
        <nav>
          <ActiveLink to="/" activeClassName={styles.active}>
            <strong>00</strong>HOME
          </ActiveLink>
          <ActiveLink to="/destination" activeClassName={styles.active}>
            <strong>01</strong>DESTINATION
          </ActiveLink>
          <ActiveLink to="/crew" activeClassName={styles.active}>
            <strong>02</strong>CREW
          </ActiveLink>
          <ActiveLink to="/technology" activeClassName={styles.active}>
            <strong>03</strong>TECHNOLOGY
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
