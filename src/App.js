import React from 'react';
import Image from "./components/carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px'
  };
  
function App() {
  return (
	<div style={styles}>
      <Image />
	</div>
  );
}

export default App;
