import React, { useState } from "react";
import Card from "./components/Card";
import { Products } from "./data/dataProduct";
import Form from "./components/Form";

const App = () => {
  const [addProduct, setAddProduct] = useState(false);

  function falseAddProduct() {
    setAddProduct(!addProduct);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-5">Dimas Skincare</h2>
      <div className="m-10">
        <div className="flex justify-end">
          <button onClick={falseAddProduct} className="border-2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            {addProduct == true ? "close form" : "show form"}
          </button>
        </div>
        {addProduct && <Form />}
      </div>
      <div className="grid grid-cols-4 m-10 gap-5">
        {Products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.nama}
            description={product.deskripsi}
          />
        ))}
      </div>
    </div>
  );
};

export default App;