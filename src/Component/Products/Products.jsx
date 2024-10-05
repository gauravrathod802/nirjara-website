import "./Products.css";
import { Link } from "react-router-dom";
import ProductImage1 from "../images/ProductImage2.png";
import ProductImage2 from "../images/ProductImage1.png";
import ProductImage3 from "../images/ProductImage3.png";


const products = [
                {imagename: ProductImage1,
                title: "Vata Powder Face Wash",
                description: "Dry, flaky skin? You might have Vata skin! Nirjara Vata Face Wash Powder is formulated with ingredients like Aloe Vera, Shatavari, and Ashwagandha to deeply nourish and lock in moisture.",
                rating:"",
                price:"150",
                },

                {imagename: ProductImage3,
                title: "Pitta Powder Face Wash",
                description: "Sensitive skin? You might have Pitta skin! Nirjara Pitta Face Wash Powder is packed with soothing ingredients like Aloe Vera, Rose, and Sandalwood to calm and cool your skin naturally.",
                rating:"",
                price:"150",
                },

                {imagename: ProductImage2,
                title: "Kapha Powder Face Wash",
                description: "Oily skin? You might have Kapha skin! Nirjara Kapha Face Wash Powder is formulated with ingredients like Red Lentils , Multani Mitti , and Turmeric to cleanse deeply and absorb excess oil.",
                rating:"",
                price:"150",
                },

                {imagename: ProductImage1,
                  title: "Kapha Powder Face Wash",
                  description: "Oily skin? You might have Kapha skin! Nirjara Kapha Face Wash Powder is formulated with ingredients like Red Lentils , Multani Mitti , and Turmeric to cleanse deeply and absorb excess oil.",
                  rating:"",
                  price:"149",
                  },

                // {imagename: Logo,
                // title: "Powder Face Wash",
                // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                // rating:"",
                // price:"200",
                // },

                // {imagename: Logo,
                // title: "Powder Face Wash",
                // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                // rating:"",
                // price:"200",
                // },

                // {imagename: Logo,
                // title: "Powder Face Wash",
                // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                // rating:"",
                // price:"200",
                // },

                // {imagename:Logo,
                // title: "Powder Face Wash",
                // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                // rating:"",
                // price:"300",
                // },
            ];
const Products = () => {
  return (
    <div className="product-main">      
        <h1>Products</h1>
        <div className="products" id="Products">
        {products.map((product, index) => (
        <div className="box" key={index}>
            <div className="card">
          <Link to={`/nirjara-website/product/${index}`} state={{ product: products[index] }}>
              <div className="image">
                <img src={product.imagename} alt="image" /> 
                 </div>
                </Link>
            <div className="products_text">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>Rs.{product.price}</h3>
                <div className="products_star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
                <button className="btn">Add to Cart</button>
               </div>
            </div>
            </div> 
        ))}
    </div>
    </div>
  )
};
export default Products;
