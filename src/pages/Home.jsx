import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    if (selected === "") {
      navigate("/");
    } else {
      navigate(`/category/${selected}`);
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res);

        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  if (!products.length) return <Spinner />;

  const uniqueCategories = [];
  for (const product of products) {
    if (!uniqueCategories.includes(product.category)) {
      uniqueCategories.push(product.category);
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div>
        <label htmlFor="category">Select by category :</label>
        <select
          name="category"
          id="category"
          // value={category}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          {uniqueCategories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <ul className="grid grid-cols-3 gap-10">
        {products.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
