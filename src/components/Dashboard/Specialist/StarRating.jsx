import { FaStar } from "react-icons/fa6";

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className={`w-3 h-3 ${index < rating ? "text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  );
};

export default StarRating;
