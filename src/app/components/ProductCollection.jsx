"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

const ProductCollection = () => {
  const [collections, setCollections] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const collectionHandler = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://resort-booking-pied.vercel.app/api/admin/add-product`)
      const newData = await response.json();

      console.log("productData:", newData);

      setCollections(newData.data);
    } catch (error) {
      setError(response.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    collectionHandler();
  }, []);

  return (
    <div className=" px-4">
  <h1 className="text-center font-bold text-2xl my-5">
    Select your Stay
  </h1>

  {collections ? (
    collections.map((item) => (
      <div
        key={item._id}
        className="bg-white rounded-xl shadow-lg p-5 mb-6"
      >
        {/* Title Row */}
        <h2 className="text-2xl font-semibold mb-4 ml-16">
          {item.title}
        </h2>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Image Column */}
          <div className="flex justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-w-[220px] h-[150px] object-cover rounded-lg"
            />
          </div>

          {/* Details Column */}
          <div>
            <h3 className="text-lg font-bold mb-2">
              Rs. {item.price}
            </h3>
           <div>
  <h4 className="font-semibold mb-2">Amenities</h4>

  <ul className="grid grid-cols-4 gap-x-28  text-sm text-gray-600">
    {item.amen.map((serve, i) => (
      <li
        key={i}
        className="whitespace-nowrap"
      >
        * {serve}
      </li>
    ))}
  </ul>
</div>

           
          </div>

          {/* Button Column */}
          <div className="flex md:justify-end justify-center">
            <Link href={`/detail/${item._id}`}>
              <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-gray-800 transition">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="flex justify-center items-center h-[50vh]">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  )}
</div>

  );
};

export default ProductCollection;
