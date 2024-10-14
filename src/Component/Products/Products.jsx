// import "./Products.css";
// import { Link } from "react-router-dom";
// import ProductImage1 from "../images/Vata.png";
// import ProductImage2 from "../images/Pitta.png";
// import ProductImage3 from "../images/Kapha.png";
// // import ProductImage4 from "../images/trio.png";

// import AOS from 'aos';
// import 'aos/dist/aos.css'
// import { useEffect } from "react";

// const products = [
//   {
//     imagename: ProductImage1,
//     title: "Vata Powder Face Wash",
//     description: "Vata skin? Nourish and hydrate with Nirjara Vata Face Wash Powder, enriched with Aloe Vera, Shatavari, and Ashwagandha.",
//     rating: "",
//     price: "149",
//   },

//   {
//     imagename: ProductImage2,
//     title: "Pitta Powder Face Wash",
//     description: "Pitta skin? Calm and cool with Nirjara Pitta Face Wash Powder, packed with Aloe Vera, Rose, and Sandalwood for natural relief.",
//     rating: "4",
//     price: "149",
//   },

//   {
//     imagename: ProductImage3,
//     title: "Kapha Powder Face Wash",
//     description: "Kapha skin? Cleanse deeply with Nirjara Kapha Face Wash Powder, enriched with Red Lentils, Multani Mitti, and Turmeric to absorb excess oil.",
//     rating: "",
//     price: "149",
//   },

//   {
//     imagename: ProductImage3,
//     title: "Kapha Powder Face Wash",
//     description: "Kapha skin? Cleanse deeply with Nirjara Kapha Face Wash Powder, enriched with Red Lentils, Multani Mitti, and Turmeric to absorb excess oil.",
//     rating: "4",
//     price: "149",
//   },

// ];
// const Products = () => {
//   useEffect(() => {
//     AOS.init({ duration: 2000 });
//   }, [])

//   return (
//     <div className="product-main">
//       <h1>Products</h1>
//       <div className="products" id="Products" data-aos="fade-left">
//         {products.map((product, index) => (
//           <div className="box" key={index}>
//             <div className="card">
//               <Link to={`/nirjara-website/product/${index}`} state={{ product: products[index] }}>
//                 <div className="image">
//                   <img src={product.imagename} alt="image" />
//                 </div>
//               </Link>
//               <div className="products_text">
//                 <h2>{product.title}</h2>
//                 <p>{product.description}</p>
//                 <h3>Rs.{product.price}</h3>
//                 <div className="products_star">
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                 </div>
//                 <button className="btn">Add to Cart</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// };
// export default Products;







// import "./Products.css";
// import { Link } from "react-router-dom";
// import ProductImage1 from "../images/Vata.png";
// import ProductImage2 from "../images/Pitta.png";
// import ProductImage3 from "../images/Kapha.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// // Import React Icons
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// const products = [
//   {
//     id: 1,
//     images: [ProductImage1, ProductImage2, ProductImage3],
//     title: "Vata Powder Face Wash",
//     description: "Vata skin? Nourish and hydrate with Nirjara Vata Face Wash Powder, enriched with Aloe Vera, Shatavari, and Ashwagandha.",
//     rating: 5,
//     price: "149",
//   },
//   {
//     id: 2,
//     images: [ProductImage2, ProductImage1, ProductImage3],
//     title: "Pitta Powder Face Wash",
//     description: "Pitta skin? Calm and cool with Nirjara Pitta Face Wash Powder, packed with Aloe Vera, Rose, and Sandalwood for natural relief.",
//     rating: 4,
//     price: "149",
//   },
//   {
//     id: 3,
//     images: [ProductImage3, ProductImage2, ProductImage1],
//     title: "Kapha Powder Face Wash",
//     description: "Kapha skin? Cleanse deeply with Nirjara Kapha Face Wash Powder, enriched with Red Lentils, Multani Mitti, and Turmeric to absorb excess oil.",
//     rating: 5,
//     price: "149",
//   },
//   {
//     id: 4,
//     images: [ProductImage2, ProductImage1, ProductImage3],
//     title: "Pitta Powder Face Wash",
//     description: "Pitta skin? Calm and cool with Nirjara Pitta Face Wash Powder, packed with Aloe Vera, Rose, and Sandalwood for natural relief.",
//     rating: 4,
//     price: "149",
//   },
// ];

// const Products = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="product-main">
//       <h1>Products</h1>
//       <div className="products" id="Products" data-aos="fade-left">
//         {products.map((product) => (
//           <div className="box" key={product.id}>
//             <div className="card">
//               <Link to={`/nirjara-website/product/${product.id}`} state={{ product }}>
//                 <div className="image">
//                   {/* Display only the first image from the array */}
//                   <img src={product.images[0]} alt={product.title} />
//                 </div>
//               </Link>
//               <div className="products_text">
//                 <h2>{product.title}</h2>
//                 <p>{product.description}</p>
//                 <h3>Rs.{product.price}</h3>
//                 <div className="products_star">
//                   {/* Conditionally render stars based on rating */}
//                   {Array.from({ length: 5 }, (_, i) => (
//                     i < product.rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
//                   ))}
//                 </div>
//                 <button className="btn">Add to Cart</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;




import "./Products.css";
import { Link } from "react-router-dom";
import ProductImage1 from "../images/Vata.png";
import ProductImage2 from "../images/Pitta.png";
import ProductImage3 from "../images/Kapha.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Import React Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const products = [
  {
    id: 1,
    images: [ProductImage1, ProductImage2, ProductImage3],
    title: "Vata Powder Face Wash",
    description: "Vata skin? Nourish and hydrate with Nirjara Vata Face Wash Powder, enriched with Aloe Vera, Shatavari, and Ashwagandha.",
    rating: 5,
    price: "149",
    oldPrice:"199",
  },
  {
    id: 2,
    images: [ProductImage2, ProductImage1, ProductImage3],
    title: "Pitta Powder Face Wash",
    description: "Pitta skin? Calm and cool with Nirjara Pitta Face Wash Powder, packed with Aloe Vera, Rose, and Sandalwood for natural relief.",
    rating: 4,
    price: "149",
    oldPrice:"199",
  },
  {
    id: 3,
    images: [ProductImage3, ProductImage2, ProductImage1],
    title: "Kapha Powder Face Wash",
    description: "Kapha skin? Cleanse deeply with Nirjara Kapha Face Wash Powder, enriched with Red Lentils, Multani Mitti, and Turmeric to absorb excess oil.",
    rating: 5,
    price: "149",
    oldPrice:"199",
  },
  {
    id: 4,
    images: [ProductImage1, ProductImage2, ProductImage3],
    title: "Tridosha Face Wash Powder",
    description: "Balance all doshas with the Tridosha Face Wash Powder, featuring a blend of herbs and ingredients for any skin type.",
    rating: 4,
    price: "149",
    oldPrice:"199",
  },
];

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const addToCart = (product) => {
    console.log(`Added ${product.title} to cart!`);
    // Add to cart logic here
  };

  return (
    <div className="product-main">
      <h1>Products</h1>
      <div className="products" id="Products" data-aos="fade-left">
        {products.map((product) => (
          <div className="box" key={product.id}>
            <div className="card">
              <Link to={`/nirjara-website/product/${product.id}`} state={{ product }}>
                <div className="image">
                  {/* Display only the first image from the array */}
                  <img src={product.images[0]} alt={product.title} />
                </div>
              </Link>
              <div className="products_text">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>Rs.{product.price}</h3>
                <div className="products_star">
                  {/* Conditionally render stars based on rating */}
                  {Array.from({ length: 5 }, (_, i) => (
                    i < product.rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
                  ))}
                </div>
                <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
