import React from 'react';

const Scroll = (props) =>{

	//Using props.children, this components is now capable of wrapping other components inside it!

	return <div style={{ overflowY: 'scroll', border: '3px solid black important!', height: '500px'}}>
				{props.children}
		   </div>
}

export default Scroll;