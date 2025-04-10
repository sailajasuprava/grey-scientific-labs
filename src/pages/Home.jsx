import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fetchProducts();
  }, []);

  if (!products.length) return <Spinner />;
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 gap-10">
      {products.map((prod) => (
        <ProductCard key={prod.id} prod={prod} />
      ))}
    </div>
  );
}

export default Home;
