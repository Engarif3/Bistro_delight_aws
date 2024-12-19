import { useCart } from "../../pages/shared/CartContext";

const UserDash = () => {
  const { orders } = useCart();

  if (!Array.isArray(orders)) {
    return <div>Error: Orders data is not available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 flex justify-center items-center">
      {orders.length === 0 ? (
        <div className="text-center text-orange-600 text-2xl font-semibold">
          You have no confirmed orders yet.
        </div>
      ) : (
        <div className="max-w-6xl w-full px-4">
          <h2 className="text-center text-3xl font-bold text-orange-600 mb-6">
            My Orders
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {orders.map((order, index) => (
              <div key={index} className="border-b pb-6  border-cyan-800 p-4 ">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Order #{index + 1}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{order.date} </p>
                <div className="space-y-4 ">
                  {order.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between  p-4 border rounded-lg shadow-md hover:bg-gray-50 "
                    >
                      <div className="flex items-center space-x- ">
                        <div className="w-16 h-16 rounded-lg overflow-hidden mr-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-700">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Description:{" "}
                            {item.description || "No description available"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium text-gray-700">
                          x{item.quantity}
                        </span>
                        <span className="text-lg font-semibold text-green-600">
                          €{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <hr className="w-10/12 border-t-2 border-gray-200" />
                  <p className="flex text-lg font-semibold text-gray-700 mt-2">
                    <span>Total: €</span>
                    <span>
                      {" "}
                      {order.items
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDash;
