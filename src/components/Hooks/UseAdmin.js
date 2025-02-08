/** @format */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const fetchAdmin = async (email) => {
  try {
    const token = localStorage.getItem("secret-token"); // Get token from localStorage

    if (!token) {
      throw new Error("No token found! User may not be authenticated.");
    }

    const response = await axios.get(
      `https://assignmet12-server-side-bda27s44y-suhel45s-projects.vercel.app/admin/${email}`,
      {
        headers: {
          authorization: `Bearer ${token}`, // Use dynamic token
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching admin:", error);
    throw error; // Ensure React Query catches the error
  }
};

const UseAdmin = () => {
  const { user } = useContext(AuthContext);

  // Ensure email exists before making the request
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin", user?.email], // Unique key for caching
    queryFn: () => fetchAdmin(user?.email), // Pass function reference
    enabled: !!user?.email, // Prevent query execution if email is missing
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return data; // Return data for component usage
};

export default UseAdmin;
