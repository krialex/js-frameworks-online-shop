import { Nav } from "../nav/Nav";
import styles from "./header.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { PiFlowerLotusFill } from "react-icons/pi";


export function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <div className={styles.logoIcon}>
                    <PiFlowerLotusFill size={30} />
                </div>
                <div>
                     Online Shop
                </div>  
            </div>
            <Nav />
            <div className={styles.cartIcon}>
                <FaShoppingCart size={26} />
            </div>
        </header>
    )
}