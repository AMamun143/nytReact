import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="container-fluid">
					<div className="navbar-header">
						<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link to="/" className="navbar-brand">NYT-React</Link>
					</div>
					<div className="collapse navbar-collapse navbar-ex1-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/">Search</Link>
							</li>
							<li>
								<Link to="/saved">Saved Articles</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}