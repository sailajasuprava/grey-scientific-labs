import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { IoCartOutline } from "react-icons/io5";
import useLogout from "../hooks/useLogout";

function Navbar() {
  const { cart } = useCart();
  const { isLoading, handleLogout } = useLogout();

  return (
    <div className="flex justify-end items-center gap-10 p-4 bg-blue-950 text-white">
      <Link to="/">
        <span>Home</span>
      </Link>

      <Link to="/cart">
        <span className="relative">
          <IoCartOutline size={30} />
          {cart.length !== 0 && (
            <span className="absolute -top-2 -right-2 text-black bg-yellow-500 rounded-full px-2 py-0.5  text-xs">
              {cart.length}
            </span>
          )}
        </span>
      </Link>

      <button
        onClick={handleLogout}
        disabled={isLoading}
        className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6 rounded-xl text-lg font-medium transition duration-300"
      >
        Log out
      </button>
    </div>
  );
}

export default Navbar;
