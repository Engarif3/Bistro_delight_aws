import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import api from "../../axios";
import SectionTitle from "../../components/SectionTitle";

const MenuList = () => {
  const [dishes, setDishes] = useState([]);
  const [cart, setCart] = useState([]); // Add cart state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // const backendUrl = "http://localhost:8000";
  const backendUrl = "http://44.202.128.16:8000";

  // This function checks if an image path is available and is valid.
  const getImageSrc = (imagePath) => {
    if (!imagePath) {
      return "/placeholder.jpg"; // Default placeholder image
    }
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    return `${backendUrl}${imagePath}`;
  };

  // This function updates the cart state
  const updateCart = (newCart) => {
    setCart(newCart); // Update the cart with the new data
  };

  useEffect(() => {
    api
      .get("/dishes")
      .then((response) => {
        setDishes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-500 animate-pulse">
          Loading dishes...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="p-6 bg-gray-100 min-h-screen ">
      {/* <SectionTitle
        heading="Our Menu"
        subHeading="Have a loot at"
        className="mt-16"
      /> */}
      <h2 className="text-2xl font-bold mb-8 text-center mt-16">
        Select a Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-16 mt-4">
        {dishes.map((dish) => (
          <MenuCard
            key={dish.id}
            dish={dish}
            getImageSrc={getImageSrc}
            updateCart={updateCart}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuList;
