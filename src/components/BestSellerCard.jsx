import { Link } from "react-router";
import { products } from "../data/productsData";

const BestSellerCard = ({ image, name, oldPrice, newPrice }) => {
  return (
    <div className="rounded-xl p-4 bg-transparent border border-gray-200 hover:shadow-md duration-300">
      <div className="relative w-full h-60 bg-gray-50 rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-lime-300 text-black text-xs px-3 py-1 rounded font-semibold">
          SALE
        </span>
      </div>

      <div className="pt-4">
        <h2 className="text-sm md:text-base font-semibold text-gray-700 uppercase tracking-wide">
          {name}
        </h2>

        <div className="mt-1 flex items-center gap-2">
          <p className="text-gray-600 line-through text-sm">${oldPrice}</p>
          <p className="text-red-600 font-bold text-lg">${newPrice}</p>
        </div>

        <Link to={`/bestsellerdetails/${products._id}`} className="w-full">
          <button className="btn btn-error w-full mt-4 text-white">
            Add To Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestSellerCard;
