import Tagline1 from "../images/Tagline1.png";
import Tagline2 from "../images/Tagline2.png";
import Tagline3 from "../images/Tagline3.png";
import './TagLine.css';

// const TagLine = () => {
//     return (
//         <div style={bannerStyle}>
//             <div style={contentContainerStyle}>
//                 <h1 style={headingStyle}>Pure. Gentle. Ayurvedic.</h1>
//                 <p style={taglineStyle}>Rejuvenate Your Skin with the Wisdom of Ayurveda.</p>
//                 <p style={contentStyle}>Welcome to a new age of skincare where ancient Ayurvedic wisdom meets modern convenience. Our <strong>Nirjara Powder Face Wash</strong> is meticulously crafted with the <strong>100% </strong>natural ingredients to bring out your skin's true radiance, all while staying gentle on the skin and kind to nature.</p>
//                 <img
//                     src={Tagline1}
//                     alt="Ayurvedic Face Wash"
//                     style={productImageStyle}
//                 />
//                 <img
//                     src={Tagline2}
//                     alt="Ayurvedic Face Wash"
//                     style={productImageStyle}
//                 />
//                 <img
//                     src={Tagline3}
//                     alt="Ayurvedic Face Wash"
//                     style={productImageStyle}
//                 />
//             </div>
//         </div>
//     )
// }


// import React from 'react';
// import Tagline1 from "../images/Tagline1.png";
// import Tagline2 from "../images/Tagline2.png";
// import Tagline3 from "../images/Tagline3.png";
// import './TagLine.css';

const TagLine = () => {
    return (
        <div className="banner">
            <div className="content-container">
                <h1 className="heading">Pure. Gentle. Ayurvedic.</h1>
                <p className="tagline">Rejuvenate Your Skin with the Wisdom of Ayurveda.</p>
                <p className="content">
                    Welcome to a new age of skincare where ancient Ayurvedic wisdom meets modern convenience. Our <strong>Nirjara Powder Face Wash</strong> is meticulously crafted with the <strong>100% </strong>natural ingredients to bring out your skin's true radiance, all while staying gentle on the skin and kind to nature.
                </p>
                <div className="image-container">
                    <img src={Tagline1} alt="Ayurvedic Face Wash" className="product-image" />
                    <img src={Tagline2} alt="Ayurvedic Face Wash" className="product-image" />
                    <img src={Tagline3} alt="Ayurvedic Face Wash" className="product-image" />
                </div>
            </div>
        </div>
    );
};

export default TagLine;












// const bannerStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '80vh', /* Use min-height instead of height */
//     textAlign: 'center',
// };

// const contentContainerStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     maxWidth: '80%', /* Keep the maximum width */
//     margin: '20px auto', /* Keep the margin */
//     padding: '20px', /* Add some padding for better readability */
// };

// const headingStyle = {
//     fontSize: '2.5rem', /* Use a relative font size */
//     color: '#4CAF50',
//     fontWeight: 'bold',
//     marginBottom: '20px',
// };


// const taglineStyle = {
//     fontSize: '1.8rem', /* Use a relative font size */
//     color: '#666',
//     marginBottom: '30px',
// };

// const contentStyle = {
//     fontSize: '1.5rem', /* Use a relative font size */
//     color: '#666',
//     marginBottom: '30px',
//     marginLeft: '50px',
//     marginRight: '50px',
// };

// const productImageStyle = {
//     maxWidth: '15%', /* Use a relative width */
//     height: 'auto', /* Keep the height auto */
//     borderRadius: '50%',
//     margin: '20px',
//     marginBottom: '1rem',

// };



// export default TagLine;