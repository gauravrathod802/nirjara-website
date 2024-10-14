// import "./Checkout.css";
// import { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom'

// const Checkout = () => {


// {/* dynamic data from single product page */}

// const [productData1, setproductData1] = useState({
//     imagename: '',
//     title: '',
//     description: '',
//     rating: '',
//     price:''

// });

// const navigate = useNavigate();
// const { state } = useLocation();
// const event1 = state?.product;


// useEffect(() => {
//     // Set initial values from the selected event when component mounts
//     if (event1) {
//         setproductData1({
//             imagename: '',
//             title: '',
//             description: '',
//             rating:'',
//             price: event1.price || '',
//         });
//     }
// }, [event1]);

//   return (
//     <div className='checkout-main'>
//         <div className='checkout-leftpart'>
//             <div className="checkout-bottom">
//                 <p>Delivery Address</p>
//                 <form action="submit">
//                     <div className="checkout-leftpart-namefield">
//                         <input type="text" id='firstname' placeholder='First name'/>
//                         <input type="text" id='lastname' placeholder='Last name'/>
//                     </div>
//                     <input type="text" id='address' placeholder='Address'/>
//                     <input type="text" id='apartment' placeholder='Apartment, suite, etc (optional)' />
//                     <div className='checkout-citydetails'>
//                         <input type="text" id='city' placeholder="City" />
//                         <input type="text" id='state' placeholder="State" />

//                         <input type="text" id='pincode' placeholder="Pincode" />
//                     </div>
//                     <input type="number" id='phone' placeholder='Mobile Number'/>
//                 </form>
//             <hr />
//             </div>
//             <div className="checkout-payment">
//                     <h1>Payment Option</h1>
//                 <div className='checkout-payment-by-upi'>
//                     <div className='checkout-payment-option'>
//                         <input type="radio" id="upi" name="UPI" value="HTML"/> 
//                         <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="image" />
//                         <p>UPI</p>
//                     </div>
//                     <div className='checkout-payment-option-text'>
//                         <p>Choose an option</p>
//                     </div>
//                     <div className='checkout-payment-phonepay'>
//                         <input type="radio" id="phonePay" name="phone_pay" value="HTML"/>
//                         <p>PhonePay</p>
//                     </div>
//                     <div className='checkout-payment-phonepay'>
//                         <input type="radio" id="upiId" name="phone_pay" value="HTML"/>
//                         <p>Pay using your UPI ID</p>
//                     </div>
//                 </div>
//                 <hr />
//                 <div className='checkout-payment-option-by-wallete'>
//                         <input type="radio" id="wallete" name="UPI" value="HTML"/> 
//                         <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="image" />
//                         <p>UPI</p>
//                 </div>
//                 <hr />
//                 <div className='checkout-payment-option-by-creditcard'>
//                         <div className='checkout-payment-option-by-creditcard-contains'>
//                             <input type="radio" id="creditCard" name="UPI" value="HTML"/> 
//                             <p>Credit / Debit / ATM Card</p>
//                         </div>
//                         <div className='checkout-payment-option-by-creditcard-text'>
//                             <p>Add and secure cards as per RBI guidlines</p>
//                         </div>
//                 </div>
//                 <hr/>
//                 <div className='checkout-payment-option-by-creditcard'>
//                         <div className='checkout-payment-option-by-creditcard-contains'>
//                             <input type="radio" id="netBanking" name="UPI" value="HTML"/> 
//                             <p>Net Banking</p>
//                         </div>
//                         <div className='checkout-payment-option-by-creditcard-text'>
//                             <p>This instrument has low success us UPI or card for better experience</p>
//                         </div>
//                 </div>
//                 <hr/>
//                 <div className='checkout-payment-option-by-creditcard'>
//                         <div className='checkout-payment-option-by-creditcard-contains'>
//                             <input type="radio" id="COD" name="UPI" value="HTML"/> 
//                             <p>Cash on Delivary</p>
//                         </div>
//                 </div>
//                 <hr/>
//             </div>
//         </div>


        
//         <div className="checkout-rightpart">
//             <h1>Product Details</h1>
//             <div className="checkout-product-details-container">
//                 <div className='checkout-productdetailes'>
//                 {event1 && (
//                     <div>
//                         <img src={event.imagename} alt="image" />
//                     </div>
//                 )}             
// {/*                 
//                   <p>Rs. {event1.price}</p>
//                   <p>Rating {event1.rating}</p> */}
//                 </div>
//                 <div className='checkout-calculated-price'>
//                     <p>SubTotal</p>
//                     <p className='price'>Rs.12300</p>
//                 </div>
//                 <div className='checkout-calculated-price'>
//                     <p>Total</p>
//                     <p className='price'><span style={{fontSize:10}}>INR</span> Rs.12300</p>
//                 </div>
//                 <div className='checkout-calculated-price'>
//                     <p>Including Rs.37.80 in taxes</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Checkout;









import "./Checkout.css";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [productData, setProductData] = useState({
    imagename: '',
    title: '',
    description: '',
    rating: '',
    price: ''
  });

  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  useEffect(() => {
    if (!product) {
      console.error('Product data is missing');
      navigate('/products'); // Redirect if product data is missing
    } else {
      setProductData({
        imagename: product.image,
        title: product.title,
        description: product.description,
        rating: product.rating,
        price: product.price
      });
    }
  }, [product, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form and submit data
  };

  return (
    <div className='checkout-main'>
      <div className='checkout-leftpart'>
        <div className="checkout-bottom">
          <p>Delivery Address</p>
          <form onSubmit={handleSubmit}>
            <div className="checkout-leftpart-namefield">
              <input type="text" id='firstname' placeholder='First name' required />
              <input type="text" id='lastname' placeholder='Last name' required />
            </div>
            <input type="text" id='address' placeholder='Address' required />
            <input type="text" id='apartment' placeholder='Apartment, suite, etc (optional)' />
            <div className='checkout-citydetails'>
              <input type="text" id='city' placeholder="City" required />
              <input type="text" id='state' placeholder="State" required />
              <input type="text" id='pincode' placeholder="Pincode" required />
            </div>
            <input type="number" id='phone' placeholder='Mobile Number' required />
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Payment Options */}
        <div className="checkout-payment">
          {/* Payment components */}
        </div>
      </div>

      {/* Right Part - Product Details */}
      <div className="checkout-rightpart">
        <h1>Product Details</h1>
        {productData && (
          <div className="checkout-product-details-container">
            <div className='checkout-productdetailes'>
              <img src={productData.imagename} alt="Product" loading="lazy" />
              <h2>{productData.title}</h2>
              <p>{productData.description}</p>
              <p>Price: Rs. {productData.price}</p>
            </div>

            <div className='checkout-calculated-price'>
              <p>SubTotal</p>
              <p className='price'>Rs.{productData.price}</p>
            </div>
            <div className='checkout-calculated-price'>
              <p>Total</p>
              <p className='price'>Rs.{productData.price}</p>
            </div>
            <div className='checkout-calculated-price'>
              <p>Including Rs.37.80 in taxes</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
