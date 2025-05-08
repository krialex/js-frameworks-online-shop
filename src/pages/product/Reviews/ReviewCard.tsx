import { Review } from "../../../common/types";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
    review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className={styles.reviewCard}>
            <strong>{review.username}</strong> rated {review.rating}/5
            <p>{review.description}</p>
        </div>
    );
}
