import React from 'react';

export interface Review {
  name: string;
  review: string;
  date: string;
  formatName?: (name: string) => string;
}

const ReviewItem: React.FC<Review> = ({ name, review, date, formatName }) => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="font-bold">{formatName && formatName(name)}</h2>
    <p>{review}</p>
    <p className="text-sm text-gray-500">{date}</p>
  </div>
);

export default ReviewItem;