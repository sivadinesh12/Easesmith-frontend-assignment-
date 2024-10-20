import "./index.css";

const ProductItem = (props) => {
  const { eachItem, handleViewProductPage, setSelectedProduct, handleRender } =
    props;
  const { img, name, type, rating, mrp, price } = eachItem;
  const handleViewProduct = () => {
    handleViewProductPage();
  };

  const handleModel = () => {
    setSelectedProduct([eachItem]);
    handleRender();
  };
  return (
    <li className="product-list-item">
      <div className="img-container">
        <img src={img} alt="plant" className="plant" />
        <button
          className="self-center view-product cursor-pointer"
          onClick={handleViewProduct}
        >
          View Product
        </button>
      </div>
      <div className="description">
        <h2 style={{ color: "#000000", fontSize: "20px", fontWeight: "500" }}>
          {name}
        </h2>
        <p style={{ color: "#838383", fontSize: "14px", fontWeight: "400" }}>
          {type}
        </p>
        <div className="flex">
          <img
            src="https://res.cloudinary.com/dh46cfc1b/image/upload/v1729429811/image_10_gu5xp6.png"
            alt="rating"
            className="mr-2"
          />
          <p>{rating}</p>
        </div>
        <p>
          <span className="mrp">${mrp}</span> ${price}
        </p>
        <div>
          <button
            className="m-2"
            style={{
              backgroundColor: "#165315",
              borderRadius: "10px",
              width: "100px",
              height: "34px",
              color: "#ffffff",
            }}
            onClick={handleModel}
          >
            Add to Cart
          </button>
          <button
            className="m-2"
            style={{
              backgroundColor: "transparent",
              borderRadius: "10px",
              width: "100px",
              height: "34px",
              border: "#165315 1px solid",
              color: "#144D14",
            }}
          >
            Buy For Rent
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
