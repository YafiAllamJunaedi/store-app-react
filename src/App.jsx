import React, { useState } from "react";
import Card from "./components/Card";
import { Products } from "./data/dataProduct";
import Form from "./components/Form";

const App = () => {
  
  const initialStateData = {
    nama: "",
    deskripsi: "",
    image: "",
  };

  const [products, setProducts] = useState(Products);
  const [data, setData] = useState(initialStateData);
  const { nama, deskripsi, image } = data;
  const [addProduct, setAddProduct] = useState(false);

  function falseAddProduct() { 
    setAddProduct(!addProduct);
  }


  function handleOnchange(e) {
    setData({
      ...data,
      id: products.length + 1,
      [e.target.name]: e.target.value,
    });
  }                                       //* {
                                          //*  id: <>,
                                          //*  key: value
                                          //* }



  function handleSubmit(e) {
    e.preventDefault();
    setProducts([...products, data]);
    setData(initialStateData);
  }
  function handleDelete(id) {
    const filteredItem = products.filter((item) => item.id != id);
    setProducts(filteredItem);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-5">Dimas TRAVEL</h2>
      <div className="m-10">
        <div className="flex justify-end">
          <button onClick={falseAddProduct} className="border-2 p-1 flex">
            AKU GAMAU TEST
            {addProduct == true ? "close form" : "show form"}
          </button>
        </div>
        {addProduct && (
          <Form
            name={nama}
            description={deskripsi}
            imageURL={image}
            onChange={handleOnchange}
            onSubmit={handleSubmit}
          />
        )}
      </div>
      <div className="lg:grid lg:grid-cols-4 m-10 gap-5 sm:grid sm:grid-cols-2">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.nama}
            description={product.deskripsi}
            onclick={() => handleDelete(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
