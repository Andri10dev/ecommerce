import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCurrency from "../custom/custom_currency";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const CardProduct = () => {
  return (
    <Link to={"/product/detail/id"} className="bg-gray-50 overflow-hidden rounded-xl shadow-sm shadow-gray-300 drop-shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500 border">
      <div className="w-full aspect-square bg-gray-300 flex items-center justify-center">
        <FontAwesomeIcon
          icon={faImage}
          className="w-1/2 h-1/2 object-cover text-gray-500"
        />
      </div>
      <div className="p-2">
        <p className="font-semibold line-clamp-2 text-start">
          Various Foods Rizky Various Foods Rizky Various Foods Rizky Various
          Foods Rizky Various Foods Rizky Various Foods Rizky Various Foods
          Rizky Various Foods Rizky Various Foods Rizky
        </p>
        <div className="font-bold text-start py-3">
          <p className="line-through text-sm">
            <CustomCurrency number={25000} />
          </p>
          <p className="text-blue-600 text-xl">
            <CustomCurrency number={2500000} />
          </p>
        </div>

        <div className="flex items-center gap-3">
          <StarRatings
            rating={4.5}
            starRatedColor="#eab308"
            starEmptyColor="#ef4444"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="2px"
          />
          <p className="font-bold">(4.5)</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
