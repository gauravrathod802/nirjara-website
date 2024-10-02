import "./Products.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/box idea.jpg";


const products = [
                {imagename: Logo,
                title: "Powder Face Wash",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"150",
                },

                {imagename: Logo,
                title: "Powder Face Wash",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"150",
                },

                {imagename: Logo,
                title: "Powder Face Wash",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"200",
                },

                {imagename: Logo,
                title: "Powder Face Wash",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"200",
                },

                {imagename: Logo,
                title: "Powder Face Wash",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"200",
                },

                {imagename: Logo,
                title: "Powder Face Wash",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"200",
                },

                {imagename: Logo,
                title: "Powder Face Wash",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"200",
                },

                {imagename:Logo,
                title: "Powder Face Wash",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"300",
                },
            ];
const Products = () => {
  return (
    <div className="product-main">      
        <h1>Products</h1>
        <div className="products" id="Products">
        {products.map((product, index) => (
        <div className="box" key={index}>
            <div className="card">
          <Link to={`/Jewellery-Website/product/${index}`} state={{ product: products[index] }}>
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
