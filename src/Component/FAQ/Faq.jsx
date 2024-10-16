import  { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Faq.css'; // Import the CSS file

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [

    {
      question: "What is Nirjara Skincare?",
      answer: (
        <div>
          <p>Nirjara Skincare is an Ayurvedic skincare brand offering natural, pure, and organic products tailored to your unique skin type. Our products are based on ancient Ayurvedic principles, designed to balance your dosha (Vata, Pitta, or Kapha) for healthier skin.
          </p>
        </div>
      ),
    },

    {
      question: "Why Choose Our Nirjara Powder Face Wash?",
      answer: (
        <div>
          <p><strong>100% Natural & Herbal Ingredients</strong></p>
          <p>Experience the power of nature with a face wash made from herbs like neem, sandalwood, tulsi, and turmeric. These time-tested Ayurvedic ingredients have been used for centuries to purify, cleanse, and nourish your skin.</p>
          
          <p><strong>Gentle on All Skin Types</strong></p>
          <p>Whether you have oily, dry, or sensitive skin, our powder face wash adapts to your skin's needs, offering a mild yet effective cleanse without the harsh chemicals. The natural formula helps restore balance, leaving your skin feeling soft, fresh, and healthy.</p>

          <p><strong>Eco-Friendly & Sustainable</strong></p>
          <p>Free from synthetic chemicals, parabens, and sulfates, our powder face wash comes in eco-conscious packaging. Because we believe that caring for your skin shouldn’t come at the expense of our planet.</p>
        </div>
      ),
    },
    {
      question: "What skin types do Nirjara products cater to?",
      answer: (
        <div>
          <p>We offer products specifically formulated for all three dosha skin types:</p>
          <ul style={{marginLeft:'1rem'}}>
          <li><p>Vata (Dry Skin)</p></li>
          <li><p>Pitta (Sensitive Skin)</p></li>
          <li><p>Kapha (Oily Skin)</p></li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the Key Benefits?",
      answer: (
        <div>
          <p><strong>Deep Cleansing & Exfoliation</strong></p>
          <p>The fine herbal powders gently remove dirt, oil, and impurities from your pores, leaving your skin feeling fresh and deeply cleansed. At the same time, they provide mild exfoliation, revealing smoother, more radiant skin.</p>

          <p><strong>Anti-Aging & Skin Brightening</strong></p>
          <p>Ingredients like turmeric and sandalwood work together to brighten the complexion and reduce the appearance of fine lines and dark spots, giving your skin a youthful glow.</p>

          <p><strong>Soothing & Calming</strong></p>
          <p>Neem and tulsi have natural antibacterial properties that soothe irritation, reduce acne, and keep your skin feeling calm and clear.</p>
        </div>
      ),
    },
    {
      question: "How to Use Our Nirjara Powder Face Wash?",
      answer: (
        <div>
          <p>1. Take a small amount of powder in your palm or a bowl.</p>
          <p>2. Add water or rosewater to create a smooth paste.</p>
          <p>3. Gently massage the paste onto damp skin in circular motions.</p>
          <p>4. Rinse off with lukewarm water and pat dry for refreshed, glowing skin.</p>
          <p>For an enhanced experience, use the powder with milk for dry skin or yogurt for oily skin to balance your complexion naturally.</p>
        </div>
      ),
    },
    {
      question: "What are the Ingredients You'll Love?",
      answer: (
        <div>
          <p><strong>Neem:</strong> Purifies and detoxifies the skin, keeping it clear and healthy.</p>
          <p><strong>Turmeric:</strong> Famed for its anti-inflammatory properties, it brightens skin and reduces dark spots.</p>
          <p><strong>Sandalwood:</strong> Soothes irritated skin and enhances glow.</p>
          <p><strong>Tulsi (Holy Basil):</strong> Fights acne and balances oily skin.</p>
          <p><strong>Multani Mitti (Fuller's Earth):</strong> Absorbs excess oil, detoxifies, and refreshes.</p>
        </div>
      ),
    },


    {
      question: "What makes Nirjara different from other skincare brands?",
      answer: (
        <div>
          <p>Nirjara is rooted in the wisdom of Ayurveda, using natural and organic ingredients. Our products are free from harmful chemicals, focusing on transparency and purity. Every formulation is crafted with dosha-specific ingredients to provide personalized care for your skin type.
          </p>
        </div>
      ),
    },


    {
      question: "Are Nirjara products suitable for sensitive skin?",
      answer: (
        <div>
          <p>Yes, we offer products like the <strong>Pitta Face Wash Powder</strong>, which is specially formulated for sensitive skin. It contains cooling and soothing ingredients like Aloe Vera, Rose, and Sandalwood to calm irritation.
          </p>
        </div>
      ),
    },




    {
      question: "How do I know my skin type?",
      answer: (
        <div>
          <p>You can identify your skin type based on the following:</p>
          <ul style={{marginLeft:'1rem'}}>
          <li><p>Vata: Dry, flaky, or rough skin.</p></li>
          <li><p>Pitta: Sensitive, prone to redness, irritation, or inflammation.</p></li>
          <li><p>Kapha: Oily, prone to acne and clogged pores.</p></li>
          </ul>
        </div>
      ),
    },




    {
      question: "Who should use this product?",
      answer: (
        <div>
          <p>- If your skin often feels dry, tight, or flaky.</p>
          <p>- If you struggle with dullness and rough patches.</p>
          <p>- For those who prefer a chemical-free, natural skincare routine.</p>
          <p>- If you want a gentle cleanse that leaves your skin soft and supple all day.</p>
        </div>
      ),
    },
    {
      question: "Why Ayurveda for Skincare?",
      answer: (
        <div>
          <p>Ayurveda believes in a holistic approach to health, where nature plays a vital role in maintaining balance in our bodies and skin. Our Ayurvedic face wash harnesses this ancient wisdom, using only the purest herbs and minerals to restore harmony to your skin. Ayurveda understands that true beauty begins with balance – and that’s what we aim to provide with every wash.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="faq-section">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div 
            onClick={() => toggleFAQ(index)} 
            className="faq-header"
          >
            <span className="faq-number">{index + 1}.</span>
            <h3 className="faq-question">{faq.question}</h3>
            {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
