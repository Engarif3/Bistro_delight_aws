import { useEffect, useState } from "react";
import api from "../axios";
import SectionTitle from "../components/SectionTitle";

const List_of_Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const backendUrl = "http://localhost:8000";

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

  console.log(dishes);

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
    <section className="p-6 bg-gray-100 min-h-screen">
      {/* <h1 className="text-3xl font-bold text-center text-red-500 underline mb-8">
        Dishes List
      </h1> */}
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-16">
        {dishes.map((dish) => (
          <li
            key={dish.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div>
              {/* Conditionally render image */}
              {dish.image ? (
                <img
                  src={getImageSrc(dish.image)}
                  alt={`${dish.name} image`}
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={(e) => {
                    e.target.src = "/placeholder.jpg"; // Fallback placeholder
                  }}
                />
              ) : (
                <img
                  src="/placeholder.jpg"
                  alt="Placeholder image"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {dish.name}
              </h2>
              <p className="text-gray-600">Price: €{dish.price}</p>
            </div>
            <div class="p-4 flex justify-end">
              <button class="btn btn-sm btn-active btn-primary">
                ADD TO CART
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List_of_Dishes;
