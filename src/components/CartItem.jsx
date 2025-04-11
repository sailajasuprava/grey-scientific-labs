import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../contexts/CartContext";

function CartItem({ item }) {
  const {
    product: { id, title, price, image },
    quantity,
  } = item;

  const { handleIncrease, handleDecrease, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-xl shadow-sm bg-white">
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      <div className="flex-1 space-y-1">
        <h2 className="text-md font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">Price: ${price}</p>
        <button onClick={() => removeFromCart(id)}>
          <RiDeleteBin6Line size={20} fill="gray" />
        </button>
      </div>

      <div className="text-right text-lg">
        <span>
          <button onClick={() => handleDecrease(id)} className="btn-sm">
            -
          </button>
          <span className="px-2">{quantity}</span>
          <button onClick={() => handleIncrease(id)} className="btn-sm">
            +
          </button>
        </span>
      </div>
    </div>
  );
}

export default CartItem;
