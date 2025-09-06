import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../shared/CartContext";
import { IoTrashBin } from "react-icons/io5";
import Swal from "sweetalert2";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, updateCart, updateOrders } = useCart();

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

  const getFormattedDateTime = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0"); // Ensure two digits for day
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = currentDate.getFullYear();

    const hours = currentDate.getHours();
    const minutes = String(currentDate.getMinutes()).padStart(2, "0"); // Ensure two digits for minutes

    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
    const formattedTime = `${formattedHours}:${minutes} ${ampm}`;

    return ` ${day}-${month}-${year} - ${formattedTime}`;
  };

  const handleCheckOut = () => {
    const formattedDate = getFormattedDateTime(); // Format the date/time (e.g., "12/19/2024, 3:00:00 PM")

    // Add the order to the orders state (including the date and time)
    const newOrder = {
      items: [...cart], // You can keep the cart items as they are
      date: formattedDate, // Add the date and time of the order
    };

    updateOrders(newOrder);
    // Assuming you are storing orders in local storage
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    savedOrders.push(newOrder); // Add new order to existing ones
    localStorage.setItem("orders", JSON.stringify(savedOrders)); // Save to local storage

    updateCart([]); // Clear the cart state
    localStorage.removeItem("cart");

    Swal.fire({
      title: "Your order is successful. Your order will be delivered soon",
      icon: "success",
      draggable: true,
      showConfirmButton: false,
      timer: 2000,
    });

    navigate("/menu");
  };

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
              onClick={handleCheckOut}
            >
              Confirm order
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
