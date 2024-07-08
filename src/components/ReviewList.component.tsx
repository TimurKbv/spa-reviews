import React from 'react';
import ReviewItem, { Review } from './ReviewItem.component';


interface ReviewListProps {
  reviews: Review[];
  formatName: (name: string) => string;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, formatName }) => (
  <div className="grid gap-4">
    {reviews.map((review, index) => (
      <ReviewItem key={index} {...review} formatName={formatName} />
    ))}
  </div>
);

export default ReviewList;