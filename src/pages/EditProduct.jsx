import { useState } from "react";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();

  const [productName, setProductName] = useState("Sample Product");
  const [price, setPrice] = useState("999");
  const [message, setMessage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (productName.trim() === "" || price.trim() === "") {
      setMessage("Please fill all fields.");
      return;
    }

    const updatedProduct = {
      id,
      productName,
      price,
    };

    console.log("Updated Product:", updatedProduct);

    setMessage("Product updated successfully!");
  };

  return (
    <div className="container">
      <h2>Edit Product</h2>

      <p>Editing Product ID: {id}</p>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Update Product</button>
      </form>

      {message && (
        <p style={{ color: "green", marginTop: "10px" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default EditProduct;