import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_API_URL, ALL_POSTS } from "../../common/url";
import { Product as ProductType } from "../../common/types";
import { Reviews } from "./Reviews/Reviews";


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
        <div>
            <h1>{product.title}</h1>
            <img src={product.image.url} alt={product.image.alt} />
            <p>{product.price} kr</p>
            <div className="productDescription">
                <p>{product.description}</p>
            </div>
            <Reviews reviews={product.reviews} />
        </div>
    );
}


