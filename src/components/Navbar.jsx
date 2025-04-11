import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { IoCartOutline } from "react-icons/io5";
import useLogout from "../hooks/useLogout";

function Navbar() {
  const { cart } = useCart();
  const { isLoading, handleLogout } = useLogout();

  return (
    <div className="flex justify-end items-center gap-10 p-4 bg-black text-white">
      <Link to="/">
        <span>Home</span>
      </Link>

      <Link to="/cart">
        <span className="relative">
          <IoCartOutline size={30} />
          {cart.length !== 0 && (
            <span className="absolute -top-2 -right-2 btn-sm">
              {cart.length}
            </span>
          )}
        </span>
      </Link>

      <button onClick={handleLogout} disabled={isLoading} className="btn-pink">
        Log out
      </button>
    </div>
  );
}

export default Navbar;
