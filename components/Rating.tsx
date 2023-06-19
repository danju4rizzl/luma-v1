import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { RatingProps } from "@/types";

export default function Rating({ ratedBy, rating }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const starIndex = i + 1;
    return (
      <li key={starIndex} className="text-teal-500">
        {starIndex <= Math.floor(rating) ? (
          <BsStarFill  />
        ) : starIndex - rating > 0 && starIndex - rating < 1 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </li>
    );
  });

  return (
    <div>
      <ul className="flex gap-x-2">{stars}</ul>
      <p>
        <span className="font-bold">{rating} </span>/ 5 rating
      </p>
      <p className="font-bold text-gray-400">{ratedBy}</p>
    </div>
  );
}
