import { useState } from "react";
import Header from "../Header";
import searchIcon from "../../image 1.png";
import plantIco from "../../image 91.svg";
import PlantAndPotsItem from "../PlantAndPotsItem";
import NurseryItem from "../NurseryItem";
import MockData from "../MockData";
import ProductItem from "../ProductItem";
import "./index.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeNavItem, setActiveNavItem] = useState();
  const [plantsandPots, setPlantsandPots] = useState("plant");
  const [sort, setSorting] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModel, setShowModal] = useState(false);
  const [selctedProduct, setSelectedProduct] = useState([]);
  const plantsAndPots = [
    {
      id: "plant",
      description:
        "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.",
    },
    {
      id: "pots",
      description:
        "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.",
    },
  ];

  const nursery = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_69_-_Copy_xizuhn.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_62_1_-_Copy_vnoqnb.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_70_-_Copy_acq0dq.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_62_1_zgxncz.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_69_efjlmu.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_62_li58d8.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 7,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_70_mjmyxh.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 8,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_68_ucnfu3.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 9,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333287/Ellipse_71_1_rx14cu.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 10,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_70_mjmyxh.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 11,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_69_efjlmu.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 12,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333287/Ellipse_68_-_Copy_ncjxym.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 13,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_69_-_Copy_xizuhn.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 14,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_62_1_-_Copy_vnoqnb.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 15,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_70_-_Copy_acq0dq.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 16,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_62_1_zgxncz.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 17,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_69_efjlmu.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 18,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_62_li58d8.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 19,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_70_mjmyxh.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 20,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_68_ucnfu3.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 21,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333287/Ellipse_71_1_rx14cu.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 22,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_70_mjmyxh.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 23,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333286/Ellipse_69_efjlmu.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
      id: 24,
      img: "https://res.cloudinary.com/dh46cfc1b/image/upload/v1729333287/Ellipse_68_-_Copy_ncjxym.png",
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
  ];
  const itemsPerPage = 15;
  const index = (currentPage - 1) * itemsPerPage;
  const lastIndex = itemsPerPage * currentPage;
  const filteredMockData = MockData.slice(index, lastIndex);
  console.log(selctedProduct);

  const renderModel = () => {
    console.log(selctedProduct);
    return (
      <div className="modal">
        <h1 style={{ fontWeight: "600" }}>ADD ITEM TO CART</h1>
        <div className="flex justify-between modal-item">
          <p>Product Name:</p>
          <p>{selctedProduct[0].name}</p>
        </div>
        <div className="flex justify-between modal-item">
          <p>Mrp:</p>
          <p>{selctedProduct[0].mrp}</p>
        </div>
        <div className="flex justify-between modal-item">
          <p>Price:</p>
          <p>{selctedProduct[0].price}</p>
        </div>
        <div className="flex modal-item my-5">
          <button
            onClick={() => setShowModal(false)}
            className="bg-white hover:bg-gray-100 text-gray font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-2"
          >
            close
          </button>
          <button
            onClick={() => {
              setCart([...cart, ...selctedProduct]);
              setSelectedProduct([]);
              setShowModal(false)
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add To cart
          </button>
        </div>
      </div>
    );
  };

  const handleRender = () => {
    setShowModal(true);
    renderModel();
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleNextPage = () => {
    if (currentPage < MockData.length / 15) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleViewProductPage = () => {
    console.log("productpage");
    navigate("/view-product");
  };

  const renderPlantsAndPotsDescription = () => {
    const filter = plantsAndPots.filter((each) => each.id === plantsandPots);
    return filter[0].description;
  };
  return (
    <div className="landing-bg flex flex-col ">
      <div className="offer-bg flex flex-row p-2 justify-center">
        <p className="text-white mx-auto">
          Free Shipping on orders above 999/-
        </p>
        <p className="text-white justify-self-end ">
          Call us on: +91 98768 05120
        </p>
      </div>
      <Header
        cart={cart}
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
      />
      <div className="self-center my-3 flex flex-row ">
        <img
          src={searchIcon}
          alt="searchIcon"
          className="h-7 w-7 search-icon"
        />
        <input
          type="search"
          className="input self-center "
          placeholder="Search Plant"
          onChange={handleSearchInput}
          value={searchInput}
        />
        <img src={plantIco} alt="plant-ico" className="plant-ico" />
      </div>
      <div className="p-5">
        <ul className="flex flex-row items-center ">
          {plantsAndPots.map((each) => (
            <PlantAndPotsItem
              eachItem={each}
              key={each.id}
              plantsandPots={plantsandPots}
              setPlantsandPots={setPlantsandPots}
              handleViewProductPage={handleViewProductPage}
            />
          ))}
        </ul>
        <p className="my-4 mx-1">{renderPlantsAndPotsDescription()}</p>
      </div>
      <div className="p-5">
        <h2 className="nursery-heading">Nursery</h2>
        <ul className="p-3 flex flex-row  nursery-list">
          {nursery.map((eachItem) => (
            <NurseryItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
      </div>
      <div className="product-listing-section flex justify-around">
        <div className="filter-container">
          <div className="filter-item">
            <p>Filter</p>
            <p>CLEAR ALL</p>
          </div>
          <div className="filter-item">
            <p>Types of Plants</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Price</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Nursery</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Ideal Plants Location</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Indoor/Outdoor</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Maintenance</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Plant Size</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Water Schedule</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Color</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Seasonal</p>
            <p>+</p>
          </div>
          <div className="filter-item">
            <p>Light Efficient</p>
            <p>+</p>
          </div>
        </div>
        <div className="cards-section">
          <div className="sorting-container flex ">
            <p className="mx-3">{MockData.length} Products</p>
            <select
              value={sort}
              className=""
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value={"all"}>All</option>
              <option value={"price"}>Price</option>
              <option value={"rating"}>Rating</option>
            </select>
          </div>
          <ul className="flex flex-wrap listing-container">
            {filteredMockData.map((each) => (
              <ProductItem
                eachItem={each}
                renderModel={renderModel}
                setSelectedProduct={setSelectedProduct}
                handleRender={handleRender}
              />
            ))}
          </ul>
          <div className="flex justify-around p-2 items-center">
            <button onClick={handlePreviousPage}>{"<<"}</button>
            <p>
              {currentPage} of {MockData.length / 15}
            </p>
            <button onClick={handleNextPage}>{">>"}</button>
          </div>
        </div>
      </div>
      <div className="footer flex flex-col p-12 ">
        <div className="flex  justify-between w-500">
          <div className="flex flex-col items-start">
            <h1 style={{ color: "#000000", fontSize: "20px" }} className="my-2">
              SUBSCRIBE TO OUR NEWSLETTER
            </h1>
            <p style={{ color: "#838383", fontSize: "14px" }}>
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necesbus enim
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                height: "35px",
                width: "269x",
                border: "#0000004D 1px solid",
                padding: "5px",
              }}
              className="my-3"
            />
            <button
              className="sub-btn my-3 "
              style={{
                width: "130px",
                height: "35px",
                borderRadius: "30px",
                backgroundColor: "#247822",
                color: "#ffffff",
                fontWeight: "600",
              }}
            >
              Subscribe
            </button>
          </div>
          <div>
            <h1 style={{ color: "#000000", fontSize: "20px" }} className="my-2">
              ABOUT US
            </h1>
            <p style={{ color: "#838383", fontSize: "14px" }}>Our Story</p>
            <p style={{ color: "#838383", fontSize: "14px" }}>Blogs</p>
            <p style={{ color: "#838383", fontSize: "14px" }}>Careers</p>
            <p style={{ color: "#838383", fontSize: "14px" }}>Contact Us</p>
            <p style={{ color: "#838383", fontSize: "14px" }}>Help & Support</p>
          </div>
          <div>
            <h1 style={{ color: "#000000", fontSize: "20px" }} className="my-2">
              USEFUL LINKS
            </h1>
            <p style={{ color: "#838383", fontSize: "14px" }}>My Account</p>
            <p style={{ color: "#838383", fontSize: "14px" }}>
              Orders & Returns
            </p>
            <p style={{ color: "#838383", fontSize: "14px" }}>Track Order</p>
            <p style={{ color: "#838383", fontSize: "14px" }}>
              Terms & Conditions
            </p>
            <p style={{ color: "#838383", fontSize: "14px" }}>Privacy Policy</p>
            <p style={{ color: "#838383", fontSize: "14px" }}>
              Return, Refund & Replacement Policy
            </p>
          </div>
          <div>
            <h1 style={{ color: "#000000", fontSize: "20px" }} className="my-2">
              GET IN TOUCH
            </h1>
            <p style={{ color: "#838383", fontSize: "14px" }}>
              Address: F-262, <br></br>First Floor,<br></br> Sushant Lok
              Phase-III,<br></br> Sector-57, Gurgaon, Haryana, India 122003{" "}
              <br></br>
              <br></br>Call: +919958287272<br></br>
              <br></br> Email: care@chaperoneplants.com
            </p>
          </div>
        </div>
        <div className="">
          <h1 style={{ color: "#000000", fontSize: "20px" }}>CHAPERONE</h1>
          <p style={{ color: "#838383", fontSize: "14px" }}>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
        </div>
        <h1 style={{ color: "#000000", fontSize: "20px", marginTop: "15px" }}>
          Follow Us
        </h1>
        <img
          src="https://res.cloudinary.com/dh46cfc1b/image/upload/v1729429107/Group_292_r6c2bg.png"
          alt="social"
          style={{ width: "200px", marginTop: "10px" }}
        />
        <hr className="my-3" style={{ backgroundColor: "#0000004D" }} />
        <p style={{ color: "#838383", fontSize: "14px" }}>
          © 2023, chaperone.com All rights reserved.
        </p>
      </div>
      <div className={`${showModel ? "" : "hide"}`}>
        {showModel ? renderModel() : ""}
      </div>
    </div>
  );
};

export default LandingPage;
