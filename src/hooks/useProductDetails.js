import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function useProductDetails() {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        console.log(res);
        setProduct(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fetchProductDetails();
  }, [productId]);

  return { product };
}

export default useProductDetails;
