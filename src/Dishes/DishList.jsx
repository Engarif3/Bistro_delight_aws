// Fetch is used here
// alternative of axios used in DishList.jsx file

import { useEffect, useState } from "react";

const DishList = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  //baseURL: "https://localhost:8000/api/dishes",

  useEffect(() => {
    // fetch("http://localhost:8000/api/dishes", {
    fetch("https://menucrafts.onrender.com/api/dishes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setDishes(data))
      .catch((err) => setError(err.message));
  }, []);

  console.log(dishes);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Dish List</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DishList;
