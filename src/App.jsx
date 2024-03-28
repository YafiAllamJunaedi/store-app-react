import React, { useState } from "react";
import Card from "./components/Card";
import { Products } from "./data/dataProduct";
import Form from "./components/Form";
import RecheckItem from "./components/RecheckItem";
import { useEffect } from "react";

const App = () => {
  const initialStateData = {
    id: null,                                                
    title: "",                                                
    description: "",
    price: "",                                                
    image: "",                                                
  };

  const [products, setProducts] = useState([]);
  const [data, setData] = useState(initialStateData);
  const { id, title, description, image, price } = data;
  const [addProduct, setAddProduct] = useState(false);
  const [showCart, setShowCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [showMore, setShowMore] = useState(false);

  async function fetchAPI() {
    const getData = await fetch("https://fakestoreapi.com/products");
    const respond = await getData.json();
    setProducts(respond);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  function falseAddProduct() {
    setAddProduct(!addProduct);
  }
  function incrementQuantity() {
    setQuantity(quantity + 1);
  }
  function decrementQuantity() {
    setQuantity(quantity - 1);
  }
  function handleOnchange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function oppositeShowMore() {
    setShowMore(!showMore);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      const updatedProduct = products.map((product) =>
        product.id === id ? data : product
      );
      setProducts(updatedProduct);
    } else {
      setProducts([...products, { ...data, id: products.length + 1 }]);
    }
    setData(initialStateData);
  }
  function handleDelete(id) {
    const filteredItem = products.filter((item) => item.id != id);
    setProducts(filteredItem);
  }
  function handleEdit(productId) {
    const productToEdit = products.find((product) => product.id === productId);
    setData(productToEdit);
    setAddProduct(true);
  }
  function handleCart(items) {
    setShowCart([
      ...showCart,
      {
        id: items.id,
        title: items.title,
        image: items.image,
        price: items.price,
      },
    ]);
  }

  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center py-5">Dimas Store</h2>
      <div className="m-10">
        <div className="flex justify-end">
          <button onClick={falseAddProduct} className="border-2 p-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            {addProduct == true ? "Tutup Form" : "Tambah Travel"}
          </button>
        </div>
        {showCart.length === 0 ? (
          <>
            <div className="mx-auto w-4/5 border-2 mt-8">
              <p className="text-lg font-medium text-center">Products list</p>
              <p className="text-base text-slate-400 text-cente italic text-center">
                Empty
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="mx-auto border p-5 border-slate-500 w-4/5 mt-5">
              <h2 className="text-center font-medium text-xl">Products List</h2>

              {showCart.map((cart) => (
                <RecheckItem
                  key={cart.id}
                  itemName={cart.title}
                  itemPrice={cart.price}
                  img={cart.image}
                  quantity={quantity}
                  plus={incrementQuantity}
                  minus={decrementQuantity}
                />
              ))}
            </div>
          </>
        )}

        {addProduct && (
          <Form
            name={title}
            description={description}
            imageURL={image}
            price={price}
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
            title={product.title}
            description={product.description}
            price={"$ " + product.price}
            onclick={() => handleDelete(product.id)}
            onEdit={() => handleEdit(product.id)}
            buyNow={() => handleCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
