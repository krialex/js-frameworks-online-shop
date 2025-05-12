import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from '../../addToCart/cartStore';


export function Nav() {
  const cart = useCartStore((state) => state.cart);
  
    return (
      <nav>
        <ul className={styles.navBar}>
          <li className={styles.navList}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navList}>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/checkout">
              <div className={styles.cartIcon}>
                  <FaShoppingCart size={26} />
                  <span className={styles.cartNumber}>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }




