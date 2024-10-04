import './App.css'
// import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import SimpleSlider from './Component/Slider/SimpleSlider';
import CustomerStory from './Component/CustomerStories/CustomerStory';
// import RingCategories from './Component/Ring categories/RingCategories';
import {Routes, Route} from 'react-router-dom';
import Login from './Component/Authentication/Login';
import SignUp from './Component/Authentication/SignUp';
// import EssentialProduct from './Component/Kalyani Essentials/EssentialProduct';
import Cart from './Component/Cart/Cart';
import Wishlist from './Component/Wishlist/Wishlist';
import Products from './Component/Products/Products';
import SinglePageProduct from './Component/SinglePageProduct/SinglePageProduct';
import Navigation from './Component/Header/Navigation';
import About from './Component/Pages/About';
import Checkout from './Component/ProductCheckout/Checkout';
import TagLine from './Component/TagLine/TagLine';
import Faq from './Component/FAQ/Faq';

function App() {

  return (
    <>
    <Navigation/>
      {/* <Header/> */}

      <Routes>
        <Route path="/nirjara-website/" element={
          <>
            <SimpleSlider />
            {/* <RingCategories /> */}
            <TagLine/>
            <Products/>
            {/* <EssentialProduct/> */}
            <CustomerStory />
           

          </>
          } />

        <Route path="/nirjara-website/login" element={<Login/>}/>
        <Route path="/nirjara-website/sign-up" element={<SignUp/>}/>
        <Route path='/nirjara-website/cart' element={<Cart/>}/>
        <Route path='/nirjara-website/wishlist' element={<Wishlist/>}/>
        <Route path='/nirjara-website/product/:index' element={<SinglePageProduct/>} />        
        <Route path='/nirjara-website/product/checkout' element={<Checkout/>}/>
        <Route path='/nirjara-website/about-us' element={<About/>}/>
        <Route path='/nirjara-website/faq' element={<Faq/>}/>
  
      </Routes>
      <Footer/>
    </>
  )
}

export default App;