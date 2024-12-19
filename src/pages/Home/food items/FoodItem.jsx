import React, { useState } from "react";
import getImageSrc from "../../../utils/getImageSrc";

const FoodItem = ({ item }) => {
  const { name, image, price, description } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Limit description to 30 words
  const words = description.split(" ");
  const limitedText = words.slice(0, 15).join(" ");

  return (
    <>
      <div className="flex flex-col sm:flex-row  p-2 justify-center items-center border border-slate-500 rounded-md hover:bg-red-600  group">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          // className="w-[300px] h-[260px] border-2 border-red-600"
          className="w-[300px] h-[260px] border-2 border-red-600"
          src={getImageSrc(image)}
          alt={`${name} image`}
        />
        <div className="sm:w-6/12 w-10/12">
          <h3 className="uppercase sm:mb-8 mb-2 flex flex-col sm:flex-row">
            <p className="font-bold text-cyan-700 sm:pl-2 pl-0 ">{name}</p>
            <span className="text-red-500 group-hover:text-yellow-400 font-bold w-full text-end pr-1">
              ----- €{price}
            </span>
          </h3>
          <p className="sm:w-10/12 w-full sm:ml-4 ml-auto font-sans">
            {limitedText}...
            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-2 sm:mb-0 mb-4 text-blue-500 hover:underline"
            >
              See More
            </button>
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md sm:w-full w-11/12 p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-cyan-700">{name}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            </div>
            <img
              className="w-full h-48 object-cover mt-4 rounded-md"
              src={getImageSrc(image)}
              alt={`${name} image`}
            />
            <p className="mt-4 font-sans">{description}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-sm bg-blue-500 text-white mt-2 rounded hover:bg-blue-600 "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItem;
