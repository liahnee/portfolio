import React from 'react';

import BlackBottom from '../assets/b1blckbot.png';
import BlackTop from '../assets/b1blacktop.png';


export default (props) => {

	const bottomStyle = () => {
		if (props.activeItem === '/about') {
			return {backgroundColor:'white', backgroundImage:'url('+ BlackTop +')', color:'black'}
		} else {
			return {backgroundColor:'black', backgroundImage:`url(${BlackTop})`, color:'white'}
		}
	}

	const dividerImg = () => {
		if (props.activeItem === '/about') {
			return {backgroundImage:`url(${BlackTop})`}
		} else {
			return {backgroundImage:`url(${BlackBottom})`}
		}
    }
    
 return (
     <>
        <div className='BWdivider' style={{backgroundImage: `url(${BlackBottom})`, backgroundColor:'black', color:'white', minHeight: '20vh'}}>
        </div>
        {/* <div className='bottom' style={bottomStyle}>
            Contact buttons: git, linkedin
        </div> */}
    </>
 )
}