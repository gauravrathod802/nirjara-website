import "./CustomerStory.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const CustomerStory = () => {

  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <div className="containers" data-aos="fade-up">
      <h1>Customer Stories</h1>
      <Carousel responsive={responsive}
    >
        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Priyanka</h5>
            <p>
            Now I had been using this face wash since a couple of months n my skin feels so good it is too glowing now... Finally found a perfect formula for my face Keep growing.
            </p>
          </div>
          <div className="bottom-img">
            <img src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-fallen-green-leaf-element-png-image_11926275.png" />
          </div>
        </div>

        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Shivani</h5>
            <p>
            I have been using pitta face wash for the past few months and have had a great experience with it. My mother also uses it. This has made a significant difference in my skin, it is even more youthful.
            </p>
          </div>
          <div className="bottom-img">
          <img src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-fallen-green-leaf-element-png-image_11926275.png" />
          </div>
        </div>

        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Aishwarya</h5>
            <p>
            Excellent product Works out of the box From the texture to the powerful ingredients every aspect of these product screams quality.....
            </p>
          </div>
          <div className="bottom-img">
          <img src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-fallen-green-leaf-element-png-image_11926275.png" />
          </div>
        </div>

        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Piyush</h5>
            <p>
            Premium experience with @nirjaraskincare. Being a Gym owner I don't have time for my skincare But with nirjara I found the best Natural skincare. My skin Feels refreshing & Hydrated.
            </p>
          </div>
          <div className="bottom-img">
          <img src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-fallen-green-leaf-element-png-image_11926275.png" />
          </div>
        </div>

        <div className="sub-container">
          <div className="sub-container-child">
            <h5>Tejaswini</h5>
            <p>Really the face wash is amazing. It's fragrance is just awesome and i liked it Wish you good luck and keep it up.
            </p>
          </div>
          <div className="bottom-img">
          <img src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-fallen-green-leaf-element-png-image_11926275.png" />
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default CustomerStory;
