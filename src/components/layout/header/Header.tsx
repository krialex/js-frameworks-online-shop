import { Link } from 'react-router-dom';
import { Nav } from "../nav/Nav";
import styles from "./header.module.css";
import { PiFlowerLotusFill } from "react-icons/pi";

export function Header() {
    return (
        <header className={styles.wrapper}>
            <Link to="/">
            <div className={styles.logo}>
                <div className={styles.logoIcon}>
                    <PiFlowerLotusFill size={30} />
                </div>
                <div className={styles.logoTitle}>Online Shop</div> 
            </div>
            </Link> 
            
            <Nav />
        </header>
    )
}