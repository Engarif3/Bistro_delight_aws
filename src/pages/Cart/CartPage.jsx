import { Link } from "react-router-dom";
import { useCart } from "../shared/CartContext";
import { IoTrashBin } from "react-icons/io5";

const CartPage = () => {
  const { cart, updateCart } = useCart();

  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart); // Update the cart in context
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart); // Update the cart in context
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart); // Update the cart in context
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  //   const backendUrl = "http://localhost:8000";
  //   const getImageSrc = (imagePath) => {
  //     if (!imagePath) {
  //       return "/placeholder.jpg"; // Default placeholder image
  //     }
  //     if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
  //       return imagePath; // Absolute URL
  //     }
  //     return `${backendUrl}${imagePath}`; // Relative URL prepended with backend URL
  //   };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-8 text-center mt-16">
        My Cart - ({cart.length})
      </h2>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {cart.length === 0 ? (
          <p className="text-center text-xl text-gray-600">
            Your cart is empty.
          </p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <div className="flex items-center space-x-4 w-7/12 ">
                  <div className="w-16 h-16 rounded-lg">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {/* <img
                      src={getImageSrc(item.image) || "/placeholder.jpg"}
                      alt={item.name || "Item image"}
                      onError={(e) => (e.target.src = "/placeholder.jpg")} // Fallback for broken images
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                  <span className="font-semibold text-lg ">{item.name}</span>
                </div>
                <div className="flex justify-between items-center  w-4/12">
                  <div className="flex items-center space-x-4  ">
                    <button
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                      onClick={() => handleDecreaseQuantity(index)}
                    >
                      −
                    </button>
                    <span className="text-xl">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                      onClick={() => handleIncreaseQuantity(index)}
                    >
                      +
                    </button>
                  </div>

                  <div className="text-lg font-semibold ">
                    €{(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    // className="btn btn-sm bg-red-600 hover:text-red-800"
                    className="btn btn-sm btn-outline  text-red-600 hover:text-white hover:bg-red-600"
                    onClick={() => handleRemoveItem(index)}
                  >
                    <IoTrashBin size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 flex justify-between items-center">
            <span className="text-2xl font-semibold">
              Total: €{calculateTotal().toFixed(2)}
            </span>
            <Link
              className="btn  bg-orange-600 text-white rounded-lg text-lg hover:bg-green-700 transition duration-200"
              to="/checkout"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
