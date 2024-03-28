import { useState } from "react";

const Card = ({
  image,
  title,
  description,
  price,
  onclick,
  onEdit,
  buyNow,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [showAll, setShowAll] = useState(description);
  function handleShowMore() {
    setShowMore((showMore) => !showMore);
  }

  return (
    <div
      className={`shadow-xl pb-2 rounded-lg flex flex-col justify-between ${
        showMore ? "h-auto" : "h-5/6"
      }`}
    >
      <img        
        className="w-full h-60 object-contain rounded-t-lg"
        src={image}
        alt=""
      />
      <div className="m-5">
        <p className="text-base font-semibold">{title}</p>

        {showMore ? (
          <p className="mt-3 text-base ">{description}</p>
        ) : (
          description.substring(0, 50)
        )}
        <div className="flex justify-end text-blue-600">
          <button onClick={handleShowMore} className="italic">
            {showMore ? "Show Less..." : "show more..."}
          </button>
        </div>
        <p className="mt-3 text-base font-bold">{price}</p>
      </div>

      <div className="h-20 flex items-center relative top-1">
        <div className="flex m-5 gap-x-14">
          {/* Button Buy Now */}
          <button
            onClick={buyNow}
            className="mr-16 bg-black text-white px-5 rounded"
          >
            Buy Now
          </button>

          <div className="flex gap-x-3">
            <div className="rounded-lg">
              <button onClick={onEdit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
              </button>
            </div>
            <div className="rounded-lg">
              <button onClick={onclick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
