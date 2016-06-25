import React from 'react';
import Query from './Query';
import Results from './Results';
import Helpers from '../../utils/helpers.js';

export default class Search extends React.Component {
	//This is the es6 way of getInitialState
	constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
        	results: [],
        	button: 'Save'
        };
    }

	handleSubmit(body) {
		console.log('submitted')
		Helpers.getInfo(body)
		.then(function(res){
			console.log(res)
			this.setState({
				results: res
			})
		}.bind(this))
	}

	render() {
		return (
			<div className="main-container">
				<Query submit={this.handleSubmit}/> 
				<Results title="Results" button={this.state.button} target="#myModal"  results={this.state.results} />
			</div>
		)
	}
}