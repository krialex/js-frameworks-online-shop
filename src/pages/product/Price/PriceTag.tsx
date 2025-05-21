import styles from "./PriceTag.module.css";

/**
 * PriceTag component
 * 
 * Displays a product's price, and optionally a discounted price.
 * If a discounted price is lower than the original price, the original price will
 * be styled as the "old" price and shown alongside the discounted one.
 * 
 */

interface PriceTagProps {
  price: number;
  discountedPrice: number;
}

export function PriceTag({ price, discountedPrice }: PriceTagProps) {
  const discount = price - discountedPrice;
  const hasDiscount = discount > 0;

  return (
    <div className={styles.priceTag}>
      {hasDiscount ? (
        <>
          <p className={styles.originalPrice}>{price} kr</p>
          <p className={styles.discountedPrice}>{discountedPrice} kr</p>
        </>
      ) : (
        <p className={styles.fullPrice}>{price} kr</p>
      )}
    </div>
  );
}
