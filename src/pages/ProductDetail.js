import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import ProductImage from "../assets/image/product_large.png";
import StarIcon from "../assets/icon/star.svg";
import PointIcon from "../assets/icon/point_large.svg";
import BookmarkIcon from "../assets/icon/bookmark.svg";
import Footer from "../components/Footer";
const ProductDetail = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Nav Logo */}
      <Header />
      {/* Breadcumbs */}
      <ul class="flex text-gray-500 text-sm lg:text-base">
        <li class="inline-flex items-center">
          <Link to="/">List Product</Link>
          <svg
            class="h-5 w-auto text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>
        <li class="inline-flex items-center">
          <Link to="/product/:id">Components</Link>
        </li>
      </ul>
      {/* Product Details */}
      <div className="flex flex-col sm:flex-row mb-10">
        {/* Product Image */}
        <div className="flex flex-1 items-center justify-center">
          <img
            alt="Product"
            src={ProductImage}
            className="h-full max-w-xs sm:max-w-sm"
          />
        </div>
        {/* Product Description */}
        <div className="flex flex-1 flex-col py-4">
          <h1 className=" text-2xl font-semibold mb-4">
            Samsung Galaxy S9 -Midnight Black 4/64 GB
          </h1>

          <div className="flex">
            <div className="flex mr-2 mb-4">
              <img src={StarIcon} className="w-6 h-6" />
              <img src={StarIcon} className="w-6 h-6" />
              <img src={StarIcon} className="w-6 h-6" />
              <img src={StarIcon} className="w-6 h-6" />
              <img src={StarIcon} className="w-6 h-6" />
            </div>
            <p className="text-gray-500 text-lg">160 Reviews</p>
          </div>

          <div className="flex items-center mb-4">
            <div className="flex mr-4">
              <img src={PointIcon} className="mr-2" />
              <p className="font-bold text-2xl" style={{ color: "#84CC16" }}>
                200000 poins
              </p>
            </div>
            <div className="flex">
              <p className="font-semibold" style={{ color: "#84CC16" }}>
                In Stock
              </p>
            </div>
          </div>

          <div className="flex pr-12 mb-4">
            <p className="text-base">
              Ukuran layar: 6.2 inci, Dual Edge Super AMOLED 2960 x 1440 (Quad
              HD+) 529 ppi, 18.5:9 Memori: RAM 6 GB (LPDDR4), ROM 64 GB, MicroSD
              up to 400GB Sistem operasi: Android 8.0 (Oreo)
            </p>
          </div>

          <div className="flex flex-col mb-4">
            <p className="text-base text-gray-500 mb-2">Jumlah</p>
            <div className="flex items-center">
              <button className="w-7 bg-gray-400 mr-3 text-indigo-50 text-2xl font-bold active:bg-gray-700">
                -
              </button>
              <p className="mr-3 text-2xl">1</p>
              <button className="w-7 bg-gray-400 text-indigo-50 text-2xl font-bold active:bg-gray-700">
                +
              </button>
            </div>
          </div>

          <div className="flex">
            <button
              type="button"
              className="hover:opacity-90 active:opacity-70 mr-3"
            >
              <img src={BookmarkIcon} />
            </button>
            <button
              type="button"
              className="text-white px-4 py-2 rounded-full hover:opacity-90 active:opacity-70 mr-3 bg-green-400"
            >
              Redeem
            </button>
            <button
              type="button"
              className="text-green-400 px-4 py-2 rounded-full hover:opacity-90 active:opacity-70 mr-3 border border-solid border-green-400 hover:bg-green-400 hover:text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* More Description of Product */}
      <div className="flex flex-col mb-20">
        {/* Header Title */}
        <div className="border-b border-solid border-gray-200 w-full mb-5">
          <h1 className="text-green-600 text-lg border-b-3 border-solid border-green-600 w-max">
            Product Detail
          </h1>
        </div>

        <h2 className="text-green-900 text-lg mb-4">Rincian</h2>
        <span>
          Ukuran layar: 6.2 inci, Dual Edge Super AMOLED 2960 x 1440 (Quad HD+)
          529 ppi, 18.5:9
          <br />
          <br />
          Memori: RAM 6 GB (LPDDR4), ROM 64 GB, MicroSD up to 400GB Sistem
          operasi: Android 8.0 (Oreo)
          <br />
          <br />
          CPU: Exynos 9810 Octa-core (2.7GHz Quad + 1.7GHz Quad), 64 bit, 10nm
          processor
          <br />
          <br />
          Kamera: Super Speed Dual Pixel, 12 MP OIS (F1.5/F2.4 Dual Aperture) +
          12MP OIS (F2.4) with LED flash, depan 8 MP, f/1.7, autofocus,
          1440p@30fps, dual video call, Auto HDR
          <br />
          <br />
          SIM: Dual SIM (Nano-SIM) Baterai: Non-removable Li-Ion 3500 mAh , Fast
          Charging on wired and wireless
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
