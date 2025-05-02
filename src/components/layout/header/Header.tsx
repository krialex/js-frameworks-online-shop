import { Nav } from "../nav/Nav";
import styles from "./header.module.css"

export function Header() {
    return (
        <header className={styles.wrapper}>
            <div>
                logo | Online Shop 
            </div>
            <Nav />
            <div>shopping cart icon</div>
        </header>
    )
}