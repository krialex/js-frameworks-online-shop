import { useState, useEffect } from "react";
import { useApi } from "../../common/useApi";
import { ProductCard } from "../../components/productCard/ProductCard";
import { Product } from "../../common/types";
import { SearchBar } from "../../components/searchBar/SearchBar";
import styles from "./home.module.css";

/**
 * Home component
 * 
 * Fetches and displays all available products.
 * Includes a search bar that filters the products based on their title.
 * Displays each product inside a `ProductCard`.
 * 
 * Uses `useApi` for fetching product data from the API.
 * 
 * @component
 */
export function Home() {
    const { posts: products, isLoading, isError } = useApi();
    const [fileredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (products.length > 0) {
            setFilteredProducts(products);
        }
    }, [products]);
    
    if (isLoading) return <div className={styles.spinner} aria-label="Loading spinner"></div>;
    if (isError) return <div>Something went wrong. Please try again later.</div>;
        
    console.log('This is data: ', products);
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

