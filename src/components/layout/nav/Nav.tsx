import { Link } from 'react-router-dom';
import { CartIcon } from '../../addToCart/CartIcon';
import styles from './nav.module.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav className={styles.nav}>
      <div className={styles.navHeader}>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <ul className={`${styles.navBar} ${menuOpen ? styles.showMenu : ''}`}>
        <li className={styles.navList}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li className={styles.navList}>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
        </li>
      </ul>

    </nav>
          <div className={styles.cartItem}>
          <CartIcon />
      </div>
      </>
  );
}

  





