//App.js

import React from 'react';
import Slideshow from './Slideshow';

const images = [
'https://media.geeksforgeeks.org/wp-content/uploads/20230407153931/gfg-tshirts.jpg',
'https://media.geeksforgeeks.org/wp-content/uploads/20240103185847/black-hoodie.webp',
'https://media.geeksforgeeks.org/wp-content/uploads/20240103185713/hoodie.jpg'
];

const Slider= () => {
	return (
		<div className="App">
			<Slideshow images={images} />
		</div>
	);
};

export default Slider;
