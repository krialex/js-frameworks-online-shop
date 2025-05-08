import { Review } from "../../../common/types";
import { ReviewCard } from "./ReviewCard";
import styles from "./Reviews.module.css";

interface ReviewsProps {
    reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
    return (
        <div className={styles.productReview}>
            <h3>Reviews</h3>
            <hr></hr>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))
            )}
        </div>
    );
}
