import { Link } from "react-router-dom";

function ProductCard({ prod }) {
  const {
    id,
    title,
    image,
    price,
    rating: { rate },
  } = prod;

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300">
      <div className="h-52 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-4"
        />
      </div>
      <div className="p-5 space-y-2 bg-gray-100 ">
        <h1 className="font-bold text-xl truncate">{title}</h1>
        <p className="text-3xl font-semibold text-green-600">${price}</p>
        <p className="text-sm text-gray-500">⭐ {rate} Rating</p>
        <Link to={`/products/${id}`}>
          <button className="btn-pink mt-3 w-full">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
