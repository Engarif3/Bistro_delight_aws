import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../shared/CartContext";

const MenuCard = ({ dish, getImageSrc }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { cart, updateCart } = useCart();

  // Increment and decrement quantity
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Handle adding item to the cart
  const handleAddToCart = () => {
    const cartItem = {
      name: dish.name,
      price: dish.price,
      image: getImageSrc(dish.image),
      quantity,
    };
    const newCart = [...cart];

    // Check if the item already exists in the cart
    const existingItemIndex = newCart.findIndex(
      (item) => item.name === dish.name
    );

    if (existingItemIndex > -1) {
      newCart[existingItemIndex].quantity += quantity;
    } else {
      newCart.push(cartItem);
    }

    updateCart(newCart);
    setShowModal(false);
    // toast.success("Item added to cart!");
    toast.success("Item added to cart!", {
      position: "bottom-right", // Position the toast here
      autoClose: 2000, // Automatically close after 3 seconds
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 overflow-hidden">
      <div className="relative">
        {dish.image ? (
          <img
            src={getImageSrc(dish.image)}
            alt={`${dish.name} image`}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.src = "/placeholder.jpg";
            }}
          />
        ) : (
          <img
            src="/placeholder.jpg"
            alt="Placeholder image"
            className="w-full h-48 object-cover"
          />
        )}
      </div>
      <div className="p-4 flex flex-col justify-between h-36">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 truncate">
            {dish.name}
          </h2>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {dish.description || "No description available."}
          </p>
        </div>
        <div className="my-4 flex items-center justify-between">
          <p className="text-lg font-bold text-red-600">€{dish.price}</p>
          <button
            className="btn btn-sm bg-red-600 text-white text-sm font-medium rounded-md shadow-md hover:bg-red-700"
            onClick={() => setShowModal(true)}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Modal for adjusting quantity */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-96 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Adjust Quantity
            </h3>
            <div className="flex items-center justify-center gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
                onClick={decrementQuantity}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
                onClick={incrementQuantity}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <div className="flex justify-end mt-6 gap-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
