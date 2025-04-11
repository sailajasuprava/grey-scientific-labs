import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useHome() {
  const [products, setProducts] = useState([]);
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

  return { products, handleCategoryChange };
}

export default useHome;
