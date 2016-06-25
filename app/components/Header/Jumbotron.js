import React from 'react';

export default class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h2 className="text-center">
					<strong>
						(ReactJS) New York Times Article Scrubber
					</strong>
				</h2>
				<h3 className="text-center">
					Search for and save Articles of interest
				</h3>
			</div>
		)
	}
}