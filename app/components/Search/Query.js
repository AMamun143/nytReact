import React from 'react';

export default class Query extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this); //!!!important for future uses
	}

	handleSubmit(event) {
		event.preventDefault		
		let body = {
			q: 	event.target.elements[0].value,
			s: 	event.target.elements[1].value,
			e: 	event.target.elements[2].value
		}

		this.props.submit(body);

	}

	render() {
		return (
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title">
									<strong>
										<i className="fa fa-newspaper-o" aria-hidden="true"/>
										{' '   /*...Adds a space*/} Query
									</strong>
								</h1>
							</div>
							<div className="panel-body">
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<h4>
											<strong>
												Topic
											</strong>
										</h4>
										<input type="text" className="form-control" id="search" />
										<h4>
											<strong>
												Start Year
											</strong>
										</h4>
										<input type="number" className="form-control" id="start" />
										<h4>
											<strong>
												End Year
											</strong>
										</h4>
										<input placeholder="...Today" type="text" className="form-control" id="end" />
									</div>
									<div className="pull-right">
										<button type="submit" className="btn btn-info">
											<h4>Search</h4>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}