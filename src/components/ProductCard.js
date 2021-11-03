import React from "react";
import { Link } from "react-router-dom";

import productImg from "../assets/image/product.png";
import pointIcon from "../assets/icon/point.svg";
import starIcon from "../assets/icon/star.svg";
const ProductCard = () => {
  return (
    <div className="flex p-2 cursor-pointer w-full sm:w-1/4">
      <Link to="/product/:id">
        <div className="h-auto border border-solid border-gray-200 rounded-lg relative p-4 hover:shadow-md">
          {/* Hover Effect */}
          <div className="opacity-0 top-0 left-0 rounded-lg p-4 bg-opacity-80 bg-green-700 w-full h-full absolute flex flex-col transition-all duration-300 hover:opacity-100">
            <label className="font-semibold" style={{ color: "#fff" }}>
              In Stock
            </label>
            <h2 className="font-bold text-white my-auto">
              Samsung Galaxy S9-Midnight Black 4/64 GB
            </h2>
            <div className="border border-solid rounded-2xl w-full text-white py-2 text-center">
              View Detail
            </div>
          </div>

          {/* Card Contents */}
          <label className="font-semibold" style={{ color: "#84CC16" }}>
            In Stock
          </label>
          <img alt="Product" src={productImg} className="w-full" />
          <h2 className=" font-medium">
            Samsung Galaxy S9-Midnight Black 4/64 GB
          </h2>
          <div className="flex flex-row">
            <div className="flex flex-col w-4/5">
              <div className="flex py-2 items-center">
                <img alt="Points" src={pointIcon} className="mr-2" />
                <p className="font-light" style={{ color: "#84CC16" }}>
                  200000 poins
                </p>
              </div>
              <div className="flex">
                <div className="flex mr-2">
                  <img src={starIcon} className="w-3 h-3" />
                  <img src={starIcon} className="w-3 h-3" />
                  <img src={starIcon} className="w-3 h-3" />
                  <img src={starIcon} className="w-3 h-3" />
                  <img src={starIcon} className="w-3 h-3" />
                </div>
                <p className="text-gray-500 text-xs">160 Reviews</p>
              </div>
            </div>
            <div className="w-2/12 py-2 justify-center items-center">
              <p>Hai</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
