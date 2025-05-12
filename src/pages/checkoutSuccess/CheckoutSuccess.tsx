import { useNavigate } from "react-router-dom";
import styles from './checkoutSuccess.module.css';
import { FaCheckCircle } from "react-icons/fa";


export function CheckoutSuccess() {
    const navigate = useNavigate();
    const continueShopping = () => {
        navigate("/"); 
    };

    return (
        <>
        <div className={styles.successContainer}>
            <div className={styles.successIcon}><FaCheckCircle /></div>
            <h1>Checkout successful</h1>
            <p>Thank you for your purchase</p>
            <button onClick={continueShopping} className={styles.successBtn}>Continue shopping</button>
        </div>
        </>
    )
}