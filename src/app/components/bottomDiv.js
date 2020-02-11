import React from 'react';

export default () => {

	return (
		<React.Fragment>
			<div
				className="BWdivider"
				style={{
					// backgroundImage: `url(${BlackBottom})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					minHeight: '200px'
				}}
			/>
			<div
				className="bottom"
				style={{ backgroundColor: 'black', minHeight: '120px' }}
			>
				<div style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '60px', width: '120px' }}>
					{/* <Button
						as="a"
						href="https://www.linkedin.com/in/catherine-yang-0ab40b3a/"
						target="_blank"
						color="linkedin"
						style={{ margin: '0' }}
					>
						<Icon name="linkedin" /> LinkedIn
					</Button> */}
				</div>
			</div>
		</React.Fragment>
	);
};
