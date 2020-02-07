import React from 'react';
import '../stylesheets/about.css';

import { Header, Image, Grid, Reveal } from 'semantic-ui-react';

import ImgDrawing from '../assets/sq1.png';
import ImgShells from '../assets/sq2.jpg';
// import ImgHanbok from '../assets/sq3.jpg';
import ImgClass from '../assets/sq4.1.jpg';

const imagesFirstRow = [
	{ bgImage: ImgDrawing, text: 'I used to draw,', animated: 'move up' },
	{ bgImage: ImgShells, text: 'paint,', animated: 'move' },
	{ bgImage: ImgClass, text: 'and teach.', animated: 'move down' }
];
const imagesSecondRow = [ { bgImage: ImgShells, text: 'Now I code and paint.', animated: 'fade' } ];



export default (props) => {
	return (
		<div className="about">
			<Grid columns={3} centered stackable style={{ minHeight: '80vh', justifyContent:'center', background: 'white', marginTop: '0', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black'}}>
				<Grid.Row style={{marginTop: '80px'}}>
					{imagesFirstRow.map((item, idx) => (
						<div>
							<Grid.Column key={idx} style={{padding: '10px'}}>
								<Reveal animated={item.animated}>
									<Reveal.Content visible className='about-card-front'>
										<p style={{fontSize: '20px', marginTop: '45%', marginBottom: ''}}>{item.text}</p>
									</Reveal.Content>
									<Reveal.Content hidden className='about-card-back'>
										<Image circular src={item.bgImage}  size="medium" />
									</Reveal.Content>
								</Reveal>
								
							</Grid.Column>
						</div>
					))}
				</Grid.Row>
				<Grid.Row>
				{imagesSecondRow.map((item, idx) => (
						<div>
							<Grid.Column key={idx} style={{padding: '10px'}}>
								<br />
								<p style={{padding: ' 25px 0 10px 0'}}>{item.text}</p>	
							</Grid.Column>
						</div>
					))}
				</Grid.Row>
				<Grid.Row />
			</Grid>
		</div>
	);
};
