import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const { setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      setIsLoading(true);
      localStorage.removeItem("grey-scientific-labs");
      setAuth(null);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Could not log out user.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return { isLoading, handleLogout };
}

export default useLogout;
