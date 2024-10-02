import Logo from "../../assets/box idea.jpg";

const TagLine = () => {
    return (
        <div style={bannerStyle}>
            <div style={contentContainerStyle}>
                <h1 style={headingStyle}>Pure. Gentle. Ayurvedic.</h1>
                <p style={taglineStyle}>Rejuvenate Your Skin with the Wisdom of Ayurveda.</p>
                <p style={contentStyle}>Welcome to a new age of skincare where ancient Ayurvedic wisdom meets modern convenience. Our <strong>Nirjara Powder Face Wash</strong> is meticulously crafted with the <strong>100% </strong>natural ingredients to bring out your skin's true radiance, all while staying gentle on the skin and kind to nature.</p>
                <img
                    src={Logo} // Replace with your product image URL
                    alt="Ayurvedic Face Wash"
                    style={productImageStyle}
                />
            </div>
        </div>
    )
}



const bannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',  // Adjust the height as needed
    // backgroundColor: '#f4f4f4', // Light background color
    textAlign: 'center',
};

const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const headingStyle = {
    fontSize: '3rem',
    color: '#4CAF50',  // Herbal, earthy color
    fontWeight: 'bold',
    marginBottom: '20px',
};

const taglineStyle = {
    fontSize: '2rem',
    color: '#666',
    marginBottom: '30px',
};

const contentStyle = {
    fontSize: '1.3rem',
    color: '#666',
    marginBottom: '30px',
    marginLeft:'50px',
    marginRight:'50px'
};
const productImageStyle = {
    width: '300px',  // Adjust image size as needed
    borderRadius: '8px',  // Optional border-radius for smoother corners
    // marginBottom:'1rem'
};
export default TagLine