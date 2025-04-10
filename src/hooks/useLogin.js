import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

function useLogin() {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  function handleFormData(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function handleFormSubmission(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const credentials = { username: "mor_2314", password: "83r5^_" };
      const res = await axios.post(
        "https://fakestoreapi.com/auth/login",
        credentials
      );
      toast.success("Login successful");
      localStorage.setItem(
        "grey-scientific-labs",
        JSON.stringify(res.data.token)
      );
      setAuth(res.data.token);
      setFormData(initialState);
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { formData, isLoading, handleFormData, handleFormSubmission };
}

export default useLogin;
