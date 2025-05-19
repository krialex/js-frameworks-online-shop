import { useState } from "react";
import styles from "./searchBar.module.css";
import { Product } from "../../common/types";
import { FaSearch } from "react-icons/fa";


interface SearchBarProps {
    products: Product[];
    onFilter: (results: Product[]) => void;
}

export function SearchBar({ products, onFilter }: SearchBarProps) {
    const [query, setQuery] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

    const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
    );
    onFilter(filtered);
    };

    return (
        <div className={styles.searchBarWrapper}>
            <input 
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={handleChange}
                className={styles.searchInput}
            />
            <FaSearch />
        </div>
    )
}