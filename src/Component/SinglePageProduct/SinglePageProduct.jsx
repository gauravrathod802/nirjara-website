// import { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom'

// import './SinglePageProduct.css';

// const SinglePageProduct = () => {
    
//     const [productData, setproductData] = useState({
//         imagename: '',
//         title: '',
//         description: '',
//         rating: '',
//         price:''

//     });

//     const navigate = useNavigate();
//     const { state } = useLocation();
//     const event = state?.product;


//     useEffect(() => {
//         // Set initial values from the selected event when component mounts
//         if (event) {
//             setproductData({
//                 imagename: '',
//                 title: '',
//                 description: '',
//                 rating:'',
//                 price: event.price || '',
//             });
//         }
//     }, [event]);

  


//   return (
//     <div className="singlepageproduct-container">
//         <div className='singlepageproduct-left'>
//             <div className="singlepageproduct-image">
//                 {event && (
//                     <div>
//                         <img src={event.imagename} alt="image" />
//                     </div>
//                 )}
//                 <div className='singlepageproduct-button'>
//                     <button className='add-to-cart-btn'>Add to Cart</button>
//                     <Link to={`/nirjara-website/product/checkout/`}>
//                     <button className='buy-now-btn'>
//                     Buy Now
//                     </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//         <div className="singlepageproduct-right">
//             <div className='singlepageproduct-details'>
//                 <div className='singlepageproduct-smalldetails'>
//                 <h1>Product Details</h1>
//                 <p>Description:</p>
//                 <p>{event.description}</p>
//                 <p>Rs. {event.price}</p>
//                 <p>Rating {event.rating}</p>
//                 </div>
//             </div>
//         </div>
// </div>
//   )
// }

// export default SinglePageProduct;

















// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./SingleProduct.css"; // Make sure your CSS is modular and clean
// import { AiFillStar } from 'react-icons/ai';

// const SingleProduct = () => {
//   const [product, setProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState("");

//   const { state } = useLocation();

//   useEffect(() => {
//     if (state?.product) {
//       setProduct(state.product);
//       setSelectedImage(state.product.images[0]); // Default to the first image
//     } else {
//       console.error("No product data found.");
//     }
//   }, [state]);

//   if (!product) {
//     return <div className="loading">Loading product details...</div>;
//   }

//   return (
//     <div className="single-product-page">
//       <div className="product-container">
//         {/* Image Gallery Section */}
//         <div className="product-gallery">
//           <div className="main-image">
//             <img src={selectedImage} alt={product.title} loading="lazy" />
//           </div>
//           <div className="thumbnail-images">
//             {product.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`${product.title} ${index}`}
//                 className={img === selectedImage ? "selected-thumbnail" : ""}
//                 onClick={() => setSelectedImage(img)} // Set the main image on click
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="product-details">
//           <h1>{product.title}</h1>
//           <p className="product-description">{product.description}</p>

//           {/* Product Rating */}
//           {product.rating && (
//             <div className="product-rating">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <AiFillStar
//                   key={i}
//                   color={i < product.rating ? "#ffa41c" : "#ddd"} // Use react-icons for stars
//                   size={24}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Product Price */}
//           <h3 className="product-price">Rs. {product.price}</h3>

//           {/* Add to Cart and Buy Now Buttons */}
//           <div className="button-group">
//             <button className="btn-add-to-cart">Add to Cart</button>
//             <button className="btn-buy-now">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;







// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./SingleProduct.css"; // Make sure your CSS is modular and clean
// import { AiFillStar } from 'react-icons/ai';

// const SingleProduct = () => {
//   const [product, setProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState("");

//   const { state } = useLocation();

//   useEffect(() => {
//     if (state?.product) {
//       setProduct(state.product);
//       setSelectedImage(state.product.images[0]); // Default to the first image
//     } else {
//       console.error("No product data found.");
//     }
//   }, [state]);

//   if (!product) {
//     return <div className="loading">Loading product details...</div>;
//   }

//   return (
//     <div className="single-product-page">
//       <div className="product-container">
//         {/* Image Gallery Section */}
//         <div className="product-gallery">
//           <div className="main-image">
//             <img src={selectedImage} alt={product.title} loading="lazy" />
//           </div>
//           <div className="thumbnail-images">
//             {product.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`${product.title} ${index}`}
//                 className={img === selectedImage ? "selected-thumbnail" : ""}
//                 onClick={() => setSelectedImage(img)} // Set the main image on click
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="product-details">
//           <h1>{product.title}</h1>
//           <p className="product-description">{product.description}</p>

//           {/* Product Rating */}
//           {product.rating && (
//             <div className="product-rating">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <AiFillStar
//                   key={i}
//                   color={i < product.rating ? "#ffa41c" : "#ddd"} // Use react-icons for stars
//                   size={24}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Product Price */}
//           <h3 className="product-price">Rs. {product.price}</h3>

//           {/* Add to Cart and Buy Now Buttons */}
//           <div className="button-group">
//             <button className="btn-add-to-cart">Add to Cart</button>
//             <button className="btn-buy-now">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;







// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./SingleProduct.css"; // Make sure your CSS is modular and clean

// const SingleProduct = () => {
//   const [product, setProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState("");

//   const { state } = useLocation();

//   useEffect(() => {
//     if (state?.product) {
//       setProduct(state.product);
//       setSelectedImage(state.product.images[0]); // Default to the first image
//     } else {
//       console.error("No product data found.");
//     }
//   }, [state]);

//   if (!product) {
//     return <div className="loading">Loading product details...</div>;
//   }

//   return (
//     <div className="single-product-page">
//       <div className="product-container">
//         {/* Image Gallery Section */}
//         <div className="product-gallery">
//           <div className="main-image">
//             <img src={selectedImage} alt={product.title} loading="lazy" />
//           </div>
//           <div className="thumbnail-images">
//             {product.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`${product.title} ${index}`}
//                 className={img === selectedImage ? "selected-thumbnail" : ""}
//                 onClick={() => setSelectedImage(img)} // Set the main image on click
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="product-details">
//           <h1>{product.title}</h1>
//           <p className="short-description"><p>{product.description}</p></p>

//           {/* Product Features List */}
//           <ul className="product-features">
//             <li>Keeps skin hydrated</li>
//             <li>Helps in skin regeneration</li>
//             <li>Boosts collagen and elastin production</li>
//           </ul>

//           {/* Contains information */}
//           <p className="product-ingredients">
//             Contains: <strong>Vitamin E, Oleic Acid, Vitamin B</strong><br />
//             Can Replace: <strong>Hyaluronic Acid Serum</strong><br />
//             Target Skin-Concern: <strong>Dryness</strong>
//           </p>



//           {/* Product Price */}
//           <div className="price-section">
//             <span className="old-price">Rs. {product.oldPrice}</span>
//             <span className="new-price">Rs. {product.price}</span>
//             <p className="tax-info">Tax included. <a href="#">Shipping calculated at checkout</a>.</p>
//           </div>

//           {/* Quantity Selector */}
//           <div className="quantity-section">
//             <label htmlFor="quantity">Quantity</label>
//             <div className="quantity-input">
//               <button className="decrease">−</button>
//               <input id="quantity" type="number" min="1" defaultValue="1" />
//               <button className="increase">+</button>
//             </div>
//           </div>

//           {/* Add to Cart and Buy Now Buttons */}
//           <div className="button-group">
//             <button className="btn-add-to-cart">Add to Cart</button>
//             <button className="btn-buy-now">Buy it Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;






import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleProduct.css"; // Make sure your CSS is modular and clean

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1); // State for quantity
  const navigate = useNavigate(); // Initialize navigate


  const handleBuyNow = () => {
    navigate(`/nirjara-website/product/checkout/`, { state: { product } }); // Pass product data in the state
  };
  

  const { state } = useLocation();

  useEffect(() => {
    if (state?.product) {
      setProduct(state.product);
      setSelectedImage(state.product.images[0]); // Default to the first image
    } else {
      console.error("No product data found.");
    }
  }, [state]);

  // Function to handle quantity change
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Prevent going below 1
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1); // Ensure the quantity doesn't go below 1
  };

  if (!product) {
    return <div className="loading">Loading product details...</div>;
  }

  return (
    <div className="single-product-page">
      <div className="product-container">
        {/* Image Gallery Section */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={selectedImage} alt={product.title} loading="lazy" />
          </div>
          <div className="thumbnail-images">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index}`}
                className={img === selectedImage ? "selected-thumbnail" : ""}
                onClick={() => setSelectedImage(img)} // Set the main image on click
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h1>{product.title}</h1>
          <p className="short-description">{product.description}</p>

          {/* Product Features List */}
          <ul className="product-features">
            <li>Keeps skin hydrated</li>
            <li>Helps in skin regeneration</li>
            <li>Boosts collagen and elastin production</li>
          </ul>

          {/* Contains information */}
          <p className="product-ingredients">
            Contains: <strong>Vitamin E, Oleic Acid, Vitamin B</strong><br />
            Can Replace: <strong>Hyaluronic Acid Serum</strong><br />
            Target Skin-Concern: <strong>Dryness</strong>
          </p>

          {/* Product Price */}
          <div className="price-section">
            {product.oldPrice && <span className="old-price">Rs. {product.oldPrice}</span>}
            <span className="new-price">Rs. {product.price}</span>
            <p className="tax-info">Tax included. <a href="#">Shipping calculated at checkout</a>.</p>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-section">
            <label htmlFor="quantity">Quantity</label>
            <div className="quantity-input">
              <button className="decrease" onClick={handleDecrease}>−</button>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button className="increase" onClick={handleIncrease}>+</button>
            </div>
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="button-group">
            <button className="btn-add-to-cart">Add to Cart</button>
            <button className="btn-buy-now" onClick={handleBuyNow} >Buy it Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
