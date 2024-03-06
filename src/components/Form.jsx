import React from "react";

const Form = ({ name, description, price, imageURL, onChange, onSubmit }) => {
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={onSubmit}>
          <div className="my-2 grid gap-2">
            <input
              className="border-2 w-96"
              type="text"
              name="nama"
              placeholder="Name"
              value={name}
              onChange={onChange}
            />
            <input
              className="border-2 w-96"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={onChange}
            />
            <input
              className="border-2 w-96"
              type="text"
              name="price"
              placeholder="Price"
              value={price}
              onChange={onChange}
            />
            <input
              className="border-2 w-96"
              type="text"
              name="image"
              placeholder="imageURL"
              value={imageURL}
              onChange={onChange}
            />
          </div>

          <div className="my-2 flex justify-center">
            <input className="border-2 w-96" type="submit" name="" id="" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
