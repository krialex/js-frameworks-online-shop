import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartStore } from "./cartStore";
import styles from "./CartIcon.module.css";

/**
 * @fileoverview CartIcon component.
 * Displays a shopping cart icon with the total number of items in the cart.
 * Clicking the icon navigates to the checkout page.
 */
export function CartIcon() {
    const cart = useCartStore((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Link to="/checkout">
            <div className={styles.cartIcon}>
                <FaShoppingCart size={26} />
                <span className={styles.cartNumber}>{totalItems}</span>
            </div>
        </Link>
    );
}