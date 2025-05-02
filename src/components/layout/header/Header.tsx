import { Nav } from "../nav/Nav";
import styles from "./header.module.css"
import { FaShoppingCart } from "react-icons/fa";



export function Header() {
    return (
        <header className={styles.wrapper}>
            <div>
                logo | Online Shop 
            </div>
            <Nav />
            <div>
                <FaShoppingCart size={26} />
            </div>
        </header>
    )
}