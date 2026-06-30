import { useState } from "react";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      productName.trim() === "" ||
      price.trim() === "" ||
      category.trim() === ""
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newProduct = {
      productName,
      price,
      category,
    };

    console.log("New Product:", newProduct);

    setMessage("Product added successfully!");

    setProductName("");
    setPrice("");
    setCategory("");
  };

  return (
    <div className="container">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>

      {message && (
        <p style={{ color: "green", marginTop: "10px" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default AddProduct;