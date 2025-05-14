import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-yellow-400 text-3xl">
      {[...Array(5)].map((_, index) =>
        index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
      )}
    </div>
  );
};

export default StarRating;
