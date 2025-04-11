import Spinner from "../components/Spinner";
import { useCart } from "../contexts/CartContext";
import useProductDetails from "../hooks/useProductDetails";

function ProductDetails() {
  const { product } = useProductDetails();
  const { handleAddToCart } = useCart();

  if (!product) return <Spinner />;

  const {
    title,
    description,
    image,
    price,
    rating: { rate, count },
  } = product;

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="w-full h-96 bg-white rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
        <img src={image} alt={title} className="object-contain h-full w-full" />
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

        <div className="flex items-center space-x-4 text-yellow-500 text-lg">
          <span>⭐ {rate}</span>
          <span className="text-gray-500 text-sm">({count} reviews)</span>
        </div>

        <p className="text-gray-600">{description}</p>

        <p className="text-4xl font-bold text-green-600">${price}</p>

        <button
          onClick={() => handleAddToCart(product)}
          className="mt-4 btn-pink"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
