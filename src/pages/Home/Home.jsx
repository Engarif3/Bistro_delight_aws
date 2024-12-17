import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";

import Reviews from "./Reviews";
import FoodItems from "./food items/FoodItems";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <FoodItems></FoodItems>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
