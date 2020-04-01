import React from 'react';
import '../stylesheets/about.css';

import { Image, Grid, Reveal } from 'semantic-ui-react';

import BlackBottom from '../assets/bBotCurve.png';
import BlackTop from '../assets/bTopCurve.png';

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

export default () => {
	return (
		<div className="about">
			<div
				className="BWdivider"
				style={{
					backgroundImage: `url(${BlackBottom})`,
					backgroundSize: '105% 100%',
					backgroundRepeat: 'no-repeat',
					height: '18rem'
				}}
			/>
			<Grid
				columns={3}
				centered
				stackable
				style={{
					minHeight: '100vh',
					justifyContent: 'center',
					background: 'white',
					marginTop: '0',
					marginLeft: 'auto',
					marginRight: 'auto',
					backgroundColor: 'black'
				}}
			>
				<Grid.Row style={{ marginTop: '20vh' }}>
					{imagesFirstRow.map((item, idx) => (
						<div key={idx} >
							<Grid.Column style={{ padding: '10px' }}>
								<Reveal animated={item.animated}>
									<Reveal.Content visible className="about-card-front">
										<p style={{ fontSize: '30px', marginTop: '45%', marginBottom: '' }}>
											{item.text}
										</p>
									</Reveal.Content>
									<Reveal.Content hidden className="about-card-back">
										<Image circular src={item.bgImage} size="medium" />
									</Reveal.Content>
								</Reveal>
							</Grid.Column>
						</div>
					))}
				</Grid.Row>
				<Grid.Row>
					{imagesSecondRow.map((item, idx) => (
						<div key={idx}>
							<Grid.Column style={{ padding: '20vh' }}>
								<br />
								<p style={{ padding: ' 15px 0 10vh 0' }}>{item.text}</p>
							</Grid.Column>
						</div>
					))}
				</Grid.Row>
				<Grid.Row />
			</Grid>
			<div
				className="BWdivider"
				style={{
					backgroundImage: `url(${BlackTop})`,
					backgroundSize: '105% 100%',
					backgroundRepeat: 'no-repeat',
					height: '18rem'
				}}
			/>
		</div>
	);
};
