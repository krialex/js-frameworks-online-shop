import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_API_URL, ALL_POSTS } from "../../common/url";
import { Product as ProductType } from "../../common/types";
import { Reviews } from "./Reviews/Reviews";
import styles from "./product.module.css";
import { PriceTag } from "./Price/PriceTag";


export function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`${BASE_API_URL}${ALL_POSTS}/${id}`);
            const json = await response.json();
            setProduct(json.data);
        }
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading product...</div>;

    return (
        <>
        <div className={styles.productPage}>
        <div className={styles.imageWrapper}>
            {product.discountedPrice < product.price && (
                <div className={styles.percent}>
                {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                </div>
            )}
            <img src={product.image.url} alt={product.image.alt} />
            </div>
            <div className={styles.productInfo}>
                <h1>{product.title}</h1>
                <p className={styles.description}>{product.description}</p>
                <PriceTag price={product.price} discountedPrice={product.discountedPrice} />
                <button className={styles.addToCart}>Add to cart</button>
            </div>
        </div>
        <Reviews reviews={product.reviews} />
        </>
    );
}


