import { Link } from "react-router-dom";
import { Product } from "../../common/types";
import styles from "./productCard.module.css";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className={styles.productCard}>
            <h2>{product.title}</h2>
            <img src={product.image.url} alt={product.image.alt} />
            <p>{product.price} kr</p>
            <Link to={`/product/${product.id}`}>
                <button>View</button>
            </Link>
        </div>
    );
}
