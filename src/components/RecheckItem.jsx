import React from "react";

const RecheckItem = ({ item, price, productName, imageProduct }) => {
  return (
    <div className="w-4/5 mx-auto">
      <p className="text-2xl pb-1 font-semibold border-b-2 border-slate-400 mb-7">
        List Items
      </p>
      <div className="flex items-center gap-x-5">
        <img className="rounded-sm w-40 mt-7" src={imageProduct} alt="" />
        <div className="mt-5">
          <p className="text-base font-semibold">{productName}</p>
          <p className="text-base font-semibold">{price}</p>
          <div className="flex items-center">
            <button className="border border-slate-400 px-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>

            <p className="p-2 mt-2">{item}</p>

            <button className="border border-slate-400 px-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-slate-400 mt-10"></div>
    </div>
  );
};

export default RecheckItem;
