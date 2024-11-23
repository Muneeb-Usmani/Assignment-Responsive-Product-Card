import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full p-4 mt-6 md:mt-8 lg:mt-12">
      <div
        className="flex flex-col items-center border border-blue-600 py-2 px-10 shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-black 
         basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <div>
          <Image
            src="/product-1.jpg"
            width={150}
            height={150}
            alt="Product One"
          />
        </div>
        <div>
          <h1 className="text-center">Samsung LS22A330</h1>
        </div>
        <div>
          <h1 className="text-center font-semibold">Rs.29,990</h1>
        </div>
        <div className="flex justify-center">
          <button className="py-2 bg-blue-400 px-4 rounded-md">Buy Now</button>
        </div>
      </div>

      <div
        className="flex flex-col items-center border border-blue-600 py-2 px-10 shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-black 
         basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <div>
          <Image
            src="/product-2.jpg"
            width={150}
            height={150}
            alt="Product Two"
          />
        </div>
        <div>
          <h1 className="text-center">ViewSonic VX2479</h1>
        </div>
        <div>
          <h1 className="text-center font-semibold">Rs.40,990</h1>
        </div>
        <div className="flex justify-center">
          <button className="py-2 bg-blue-400 px-4 rounded-md">Buy Now</button>
        </div>
      </div>

      <div
        className="flex flex-col items-center border border-blue-600 py-2 px-10 shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-black 
         basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <div>
          <Image
            src="/product-3.jpg"
            width={150}
            height={150}
            alt="Product Three"
          />
        </div>
        <div>
          <h1 className="text-center">MXG G24IF</h1>
        </div>
        <div>
          <h1 className="text-center font-semibold">Rs.45,990</h1>
        </div>
        <div className="flex justify-center">
          <button className="py-2 bg-blue-400 px-4 rounded-md">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
