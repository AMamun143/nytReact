import React from 'react';
import Results from '../Search/Results';
import Helpers from '../../utils/helpers.js';

export default class Search extends React.Component {
	//This is the es6 way of getInitialState
	constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.state = {
        	results: [],
        	button: 'Delete'
        };
    }

	componentWillMount() {
		Helpers.getData()
		.then(function(res){
			this.setState({
				results: res.data
			})
		}.bind(this))
	}

	updateData() {
		Helpers.getData()
		.then(function(res){
			this.setState({
				results: res.data
			})
		}.bind(this))
	}

	render() {
		return (
			<div className="main-container">
				<Results title="Saved Articles" update={this.updateData} target="none" button={this.state.button} results={this.state.results} />
			</div>
		)
	}
}