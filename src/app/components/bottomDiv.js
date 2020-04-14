import React from 'react';
import { Button } from 'semantic-ui-react';

export default () => {

	return (
		<React.Fragment>
			{/* <div
				className="BWdivider"
				style={{
					// backgroundImage: `url(${BlackBottom})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					minHeight: '200px'
				}}
			/> */}
			<div
				className="bottom"
				style={{ backgroundColor: 'black', minHeight: '150px' }}
			>
					<Button	
						className="bottom-nav-btn"
						as="a"
						href="https://drive.google.com/file/d/12ybEM-bOMxlBCbCgY3kgJbXfaGAuc8jp/view?usp=sharing"
						target="_blank"
						color="olive"
						circular 
						inverted
						icon="file outline"
						size="huge"
					/>
					<Button
						className="bottom-nav-btn"
						as="a"
						href="https://www.linkedin.com/in/catherine-yang-0ab40b3a/"
						target="_blank"
						color="blue"
						circular 
						inverted
						icon="linkedin"
						size="huge"
					/>
					<Button
						className="bottom-nav-btn"
						as="a"
						href="https://codepen.io/liahnee"
						target="_blank"
						color="standard"
						inverted
						circular 
						icon="codepen"
						size="huge"
					/>
					<Button
						className="bottom-nav-btn"
						as="a"
						href="https://www.linkedin.com/in/catherine-yang-0ab40b3a/"
						target="_blank"
						color="teal"
						circular 
						inverted
						icon="github"
						size="huge"
					/>

			</div>
		</React.Fragment>
	);
};
