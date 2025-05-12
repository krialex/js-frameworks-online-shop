import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../components/addToCart/cartStore";
import styles from "./checkout.module.css";

export function Checkout() {
    const cart = useCartStore((state) => state.cart);
    const removeItem = useCartStore((state) => state.removeFromCart);
    const clearCart = useCartStore((state) => state.clearCart);
    const totalPrice = cart.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);
    const navigate = useNavigate();
    const handleCheckout = () => {
        clearCart(); 
        navigate("/success"); 
    };


    return (
        <div className={styles.cartContainer}>
          <h1>Cart</h1>
          {cart.length === 0 ? (
            <div className={styles.cartList}>
              <p>There are no products in your cart yet</p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className={styles.productInCart}>
                  <img src={item.image.url} alt={item.image.alt} />
                    <p className={styles.title}>{item.title} x {item.quantity}</p>
                    <p className={styles.price}>{(item.discountedPrice * item.quantity).toFixed(2)} kr</p>
                  <button onClick={() => removeItem(item.id)} className={styles.removeBtn}>Remove</button>
                </div>
              ))}
              <div className={styles.cartSummary}>
                <p><strong>Total:</strong> {totalPrice.toFixed(2)} kr</p>
                <div>
                    <button onClick={clearCart} className={styles.clearCartBtn}>Clear cart</button>
                    <button onClick={handleCheckout} className={styles.checkOutBtn}>By now</button>
                </div>
              </div>
            </>
          )}
        </div>
      );
      
}