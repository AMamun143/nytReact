import React from 'react';
import Helpers from '../utils/helpers.js';

export default class Result extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	target: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick() {
    	if (this.props.button == 'Save') {
    		Helpers.addData(this.props.title, this.props.date, this.props.url)
    	} else {
    		Helpers.deleteData(this.props.id).then(function(res){
    			this.props.update()
    		}.bind(this))
    	}
    }

	render() {

		return (
			<li className="list-group-item">
				<h3>
					<span>
						<em>
							{this.props.title}
						</em>
					</span>
					<span className="btn-group pull-right">
						<a href={this.props.url} target="_blank">
							<button className="btn btn-default">
								View Article
							</button>
						</a>
						<button className="btn btn-warning" onClick={this.handleClick} data-toggle="modal" data-target={this.props.target} style={{borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px"}}>
							{this.props.button}
						</button>
					</span>
				</h3>
				<p>
					Date Published: {this.props.date.substring(0,10)}
				</p>
			</li>
		)
	}
}