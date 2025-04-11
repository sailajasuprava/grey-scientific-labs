import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function useCategory() {
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

  return { products };
}

export default useCategory;
