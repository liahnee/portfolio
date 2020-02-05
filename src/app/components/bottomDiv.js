import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

import BlackBottom from '../assets/b1blckbot.png';
import BlackTop from '../assets/b1blacktop.png';


export default (props) => {
 return (
     <>
        <div className='BWdivider' style={{backgroundImage: `url(${props.activeItem === '/about'? BlackTop : BlackBottom})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', minHeight: '200px'}}>
        </div>
        <div className='bottom' style={{backgroundColor: `${props.activeItem === '/about'? 'white' :'black'}`, minHeight: '120px'}}>
            <div style={{ marginLeft:'auto', marginRight:'auto', paddingTop: '60px', width: '200px'}}>
            <Button as='a' href='https://www.linkedin.com/in/catherine-yang-0ab40b3a/' target="_blank" color='linkedin' >
                    <Icon name='linkedin' /> LinkedIn
                </Button>
            </div>
                
        </div>
    </>
 )
}