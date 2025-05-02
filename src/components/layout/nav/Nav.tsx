import { Link } from 'react-router-dom';
import styles from './nav.module.css'

export function Nav() {
    return (
      <nav>
        <ul className={styles.navBar}>
          <li className={styles.navList}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navList}>
            <Link to="/product">Some page</Link>
          </li>
          <li className={styles.navList}>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    )
  }