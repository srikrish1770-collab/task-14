import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h1>Product Details</h1>

      <div className="card">
        <h2>{product.name}</h2>
        <p><strong>Email:</strong> {product.email}</p>
        <p><strong>Phone:</strong> {product.phone}</p>
        <p><strong>Website:</strong> {product.website}</p>
        <p><strong>Company:</strong> {product.company?.name}</p>
        <p><strong>City:</strong> {product.address?.city}</p>
      </div>

      <Link to="/products">
        <button>Back to Products</button>
      </Link>
    </div>
  );
}

export default ProductDetails;