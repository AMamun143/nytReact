import React from 'react';
import Result from '../Result';

export default class Results extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let rows = [];
		this.props.results.forEach((article) => {
			rows.push(<Result update={this.props.update} target={this.props.target} button={this.props.button} title={article.headline} date={article.published} url={article.url} id={article._id} Key={article._id}/>)
		})
		if (rows.length == 0 && this.props.button == "Save") {
			rows = (
				<li className="list-group-item">
					<h3>
						<span>
							<em>Enter Search Terms to Begin...</em>							
						</span>
					</h3>
				</li>
			)
		} else if (rows.length == 0 && this.props.button == "Delete") {
			rows = (
				<li className="list-group-item">
					<h3>
						<span>
							<em>No Saved Articles...</em>							
						</span>
					</h3>
				</li>
			)
		}
		return (
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title">
									<strong>
										<i className="fa fa-list-alt" />
										{' '} {this.props.title} 
									</strong>
								</h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
									{rows}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}