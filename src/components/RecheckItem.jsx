import React from "react";

const RecheckItem = ({ key, itemName, img }) => {
  return (
    <div className="" key={key}>
      <div className="flex m-5">
        <img
          src={img}
          alt=""
          className="w-28 h-20 rounded-md"
        />
        <div className="p-3">
          <p className="text-base font-semibold">{itemName}</p>
          <p className="mb-7">$500</p>
        </div>
      </div>
    </div>
  );
};

export default RecheckItem;
