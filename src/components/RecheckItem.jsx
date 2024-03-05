import React from "react";

const RecheckItem = ({
  key,
  itemName,
  itemPrice,
  img,
  quantity,
  plus,
  minus,
}) => {
  return (
    <div className="" key={key}>
      <div className="flex m-5">
        <img
          src={img}
          alt=""
          className="w-28 h-20 rounded-md border-4 border-slate-600"
        />

        <div className="ml-5">
          <p className="text-base font-medium">{itemName}</p>
          <p className="font-bold">{itemPrice}</p>

          <div className="flex gap-2 mt-1">
            {quantity <= 1 ? (
              ""
            ) : (
              <button onClick={minus} className="border px-1 border-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
            )}
            <p>{quantity}</p>
            <button onClick={plus} className="border px-1 border-slate-500">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-6"
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
    </div>
  );
};

export default RecheckItem;
