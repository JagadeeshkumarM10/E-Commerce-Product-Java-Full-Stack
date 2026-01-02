import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    category: "",
    stockQuantity: "",
    releaseDate: "",
    productAvailable: false,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // <-- for image preview

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // set preview URL
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    axios
      .post("http://localhost:8080/api/product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Product added successfully");
        // Reset form
        setProduct({
          name: "",
          brand: "",
          description: "",
          price: "",
          category: "",
          stockQuantity: "",
          releaseDate: "",
          productAvailable: false,
        });
        setImage(null);
        setPreview(null);
      })
      .catch(() => {
        alert("Error adding product");
      });
  };

  // Inline styles
  const pageStyle = {
    minHeight: "100vh",
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("https://images.unsplash.com/photo-1523275335684-37898b6baf30")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 15px",
  };

  const cardStyle = {
    background: "#fff",
    width: "100%",
    maxWidth: "900px",
    padding: "35px",
    borderRadius: "14px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #0d6efd, #084298)",
    border: "none",
    fontWeight: "600",
    padding: "12px",
    borderRadius: "10px",
    width: "100%",
  };

  const inputStyle = { borderRadius: "8px" };

  const previewStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginTop: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h3 style={{ textAlign: "center", marginBottom: "30px", fontWeight: "700" }}>
          Add New Product
        </h3>

        <form className="row g-3" onSubmit={submitHandler}>
          {/* Name */}
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>

          {/* Brand */}
          <div className="col-md-6">
            <label className="form-label">Brand</label>
            <input
              type="text"
              className="form-control"
              placeholder="Brand Name"
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>

          {/* Description */}
          <div className="col-12">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>

          {/* Price */}
          <div className="col-md-4">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="₹ Price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>

          {/* Category */}
          <div className="col-md-4">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              style={inputStyle}
            >
              <option value="">Select category</option>
              <option value="Laptop">Laptop</option>
              <option value="Headphone">Headphone</option>
              <option value="Mobile">Mobile</option>
              <option value="Electronics">Electronics</option>
              <option value="Toys">Toys</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>

          {/* Stock */}
          <div className="col-md-4">
            <label className="form-label">Stock Quantity</label>
            <input
              type="number"
              className="form-control"
              placeholder="Available stock"
              name="stockQuantity"
              value={product.stockQuantity}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>

          {/* Release Date */}
          <div className="col-md-6">
            <label className="form-label">Release Date</label>
            <input
              type="date"
              className="form-control"
              name="releaseDate"
              value={product.releaseDate}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>

          {/* Image */}
          <div className="col-md-6">
            <label className="form-label">Product Image</label>
            <input
              type="file"
              className="form-control"
              onChange={handleImageChange}
              style={inputStyle}
            />
            {preview && <img src={preview} alt="Preview" style={previewStyle} />}
          </div>

          {/* Availability */}
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={product.productAvailable}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    productAvailable: e.target.checked,
                  })
                }
              />
              <label className="form-check-label">Product Available</label>
            </div>
          </div>

          {/* Submit */}
          <div className="col-12">
            <button type="submit" style={buttonStyle}>
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
