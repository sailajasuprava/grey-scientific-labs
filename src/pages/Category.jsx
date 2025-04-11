import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";

function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductsByCategory() {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductsByCategory();
  }, [category]);

  if (!products.length) return <Spinner />;

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <ul className="grid grid-cols-3 gap-10">
        {products.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </ul>
    </div>
  );
}

export default Category;
