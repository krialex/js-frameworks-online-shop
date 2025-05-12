import { useState, useEffect } from "react";
import { useApi } from "../../common/useApi";
import { ProductCard } from "../../components/productCard/ProductCard";
import { Product } from "../../common/types";
import { SearchBar } from "../../components/searchBar/SearchBar";
import styles from "./home.module.css";

export function Home() {
    const { posts: products, isLoading, isError } = useApi();
    const [fileredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (products.length > 0) {
            setFilteredProducts(products);
        }
    }, [products]);
    
    if (isLoading) return <div>Loading</div>;
    if (isError) return <div>error message</div>;
        
    console.log('Dette er data: ', products);
    return (
        <div>
            <h1>Browse our products</h1>
            <SearchBar products={products} onFilter={setFilteredProducts} />
            <div className={styles.productGrid}>
                {fileredProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

