import AboutImg from '../../assets/NirjaraLogo_black.png';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img src={AboutImg} alt="" />
      <p>
      At Nirjara, we believe in the power of nature and the timeless wisdom of Ayurveda to nurture, heal, and rejuvenate your skin. Our journey began with a simple mission: to create a skincare solution that’s 100% natural, pure, and rooted in Ayurvedic traditions. With Nirjara Powder Face Wash, we are proud to offer a product that cleanses your skin naturally, free from harsh chemicals and artificial ingredients.

      </p>
      <p><h1>The Essence of Nirjara</h1>
      The name Nirjara comes from the Sanskrit word meaning “to purify” or “to cleanse,” reflecting our commitment to delivering products that leave your skin fresh, radiant, and rejuvenated. We believe that skincare should be as pure and gentle as the earth itself, which is why every ingredient in Nirjara Powder Face Wash is carefully selected for its natural, holistic benefits.</p>
      <p>
        <h1>100% Natural. 100% Ayurvedic.</h1>
        Nirjara Powder Face Wash is formulated with a blend of powerful herbs and minerals used in Ayurveda for centuries. Ingredients like neem, turmeric, and sandalwood are renowned for their ability to purify, brighten, and heal the skin. Each ingredient is chosen not just for its individual benefits, but for the way it harmonizes with the others to balance and enhance your skin’s natural beauty.
      </p>

      <p>
        <h1>Our Vision</h1>
        At Nirjara, we envision a world where skincare is simple, effective, and natural. We aim to provide products that reconnect people with nature, offering them the best of Ayurvedic skincare in a form that fits seamlessly into modern life. Our goal is to help you achieve radiant, healthy skin in a way that honors both your well-being and the planet.
      </p>
      <p>
        <h1>Our Promise</h1>
        We are committed to creating skincare that is safe for you and the environment. That means:
      </p>
      
       <p><ul className='list' style={{marginBottom:"1rem"}}>
          <li>No synthetic chemicals</li>
          <li>No parabens</li>
          <li>sulfates</li>
          <li>No artificial fragrances</li>
          <li>Eco-friendly packaging</li>
          <li>Cruelty-free and ethically sourced ingredients</li>
        </ul></p> 
        <p>Get in touch via whatsapp + 91 9075487410
        Or by emailing info@nirjaraskincare@gmail.com</p>
    </div>
  )
}

export default About;