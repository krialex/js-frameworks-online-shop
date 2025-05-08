import styles from './footer.module.css';
import { FaRegCopyright } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.footerInfo}>
                <p>footer section</p>
                <FaRegCopyright />
                <p>2025</p>
            </div>
        </footer>
        )
}