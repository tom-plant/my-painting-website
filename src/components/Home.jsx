// src/components/Home.jsx

import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main
        style={{
          position: 'relative', // Set the main container as relative
          backgroundColor: '#fff2d6', // Background color for the entire section
          width: '100%',
          minHeight: '100vh', // Set a minimum height for the main container
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Your Home page content here */}
        <div
          style={{
            position: 'absolute', // Set the text as absolute
            top: '50%', // Center vertically
            left: '50%', // Center horizontally
            transform: 'translate(-50%, -50%)', // Center both horizontally and vertically
            color: '#e1d3c1', // Text color
            fontSize: '250px', // Text size
            fontFamily: 'Qontra', // Apply the Qontra font
            padding: '0', // Remove padding on the left and right
            whiteSpace: 'nowrap', // Prevent text from wrapping
            zIndex: '1', // Set a higher z-index for the text to be behind the image
          }}
        >
          TOM &nbsp; PLANT {/* Add a space character between TOM and PLANT */}
        </div>
        <img 
          src="/images/tallinn.png"
          alt="Tallinn"
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block', // To remove any potential extra spacing
            margin: '150px auto 0', // Adjust the top margin to move the image down
            position: 'relative', // Set the image as relative
            zIndex: '2', // Set a higher z-index for the image to be in front
          }}
        />
        <div
          style={{
            backgroundColor: '#333', // Replace with your preferred color
            width: '100%',
            flexGrow: 1, // Allow the colored block to grow and take remaining space
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center content horizontally
            justifyContent: 'flex-end', // Align content to the bottom
            paddingBottom: '16px', // Add some padding to push the text further down
          }}
        >
          {/* Add any content or text you want within this colored block */}
          <p
            style={{
              color: '#fff', // Text color
              fontFamily: 'Qontra', // Use your font family
              fontSize: '14px', // Adjust the font size as needed
              margin: '8px 0', // Adjust the margin to move the text lower
              textAlign: 'center', // Center the text horizontally
            }}
          >
            Paintings of Estonia during 2023-24 Fulbright Open Research Scholarship
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
