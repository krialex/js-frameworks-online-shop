import { useApi } from "../../common/useApi";
import { ProductCard } from "../../components/productCard/ProductCard";
import { Product } from "../../common/types";
import styles from "./home.module.css";

export function Home() {
    const { posts: products, isLoading, isError } = useApi();
    
    if (isLoading) return <div>Loading</div>;
    if (isError) return <div>error message</div>;
        
    console.log('Dette er data: ', products);
    return (
        <div>
            <h1>Welcome to the home page</h1>
            <div className={styles.productGrid}>
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

