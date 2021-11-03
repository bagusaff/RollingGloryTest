import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const ProductLists = () => {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Nav Logo */}
      <Header />
      {/* Body */}
      <div className="flex flex-col sm:flex-row w-full px-4 sm:px-12">
        {/* Filter Wrapper */}
        <div className="p-2 w-full sm:w-1/5">
          <p className="font-semibold text-lg text-gray-700 border-b border-solid border-gray-200 pb-3">
            Filter
          </p>

          <div className="max-w-sm mx-auto flex flex-col border-2 border-solid rounded-md border-gray-200 px-3 py-5 mt-5">
            <label className="items-center font-semibold text-gray-500">
              <input
                className="text-indigo-500 w-4 h-4 mr-2 mb-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                type="checkbox"
              />
              Rating 4 Keatas
            </label>
            <label className="items-center font-semibold text-gray-500">
              <input
                className="ring-yellow-300 w-4 h-4 mr-2 focus:ring-yellow-500 focus:ring-opacity-25 border border-gray-300 rounded"
                type="checkbox"
              />
              Stok Tersedia
            </label>
          </div>
        </div>

        {/* Products Wrapper */}
        <div className="p-2 w-full sm:w-4/5 min-h-full">
          <div className="flex border-b border-solid border-gray-200">
            <p className="font-semibold text-lg text-gray-700">Product Lists</p>

            <div className="flex items-center ml-auto mb-5 sm:mb-0 ">
              <p className=" text-gray-600 mr-5">Urutkan</p>
              <div className="relative ml-auto">
                <svg
                  className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                  />
                </svg>
                <select className="border border-gray-300 h-10 text-gray-600 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                  <option>Terbaru</option>
                  <option>Ulasan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductLists;
