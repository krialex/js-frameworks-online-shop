import { Link } from "react-router-dom";
import { Product } from "../../common/types";
import styles from "./productCard.module.css";
import { PriceTag } from "../../pages/product/Price/PriceTag";
//import style from "./../../pages/product/Price/PriceTag.module.css";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className={styles.productCard}>
            <h2>{product.title}</h2>
            <div className={styles.imageWrapper}>
            {product.discountedPrice < product.price && (
                <div className={styles.percent}>
                {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                </div>
            )}
            <img src={product.image.url} alt={product.image.alt} />
            </div>

            <PriceTag price={product.price} discountedPrice={product.discountedPrice} /> 
            <Link to={`/product/${product.id}`}>
                <button>View</button>
            </Link>
        </div>
    );
}
