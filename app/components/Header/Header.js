import React from 'react';
import Nav from './Nav';
import Jumbotron from './Jumbotron';
import Modal from './Modal'

export default class Header extends React.Component {
	render() {
		return(
			<div className="main-container">
				<div className="container">
					<Nav />
					<Jumbotron />
					{this.props.children}
					<Modal />
				</div>
			</div>
		)
	}
}