import styles from "./PriceTag.module.css";

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
