import React from 'react';

export default class Modal extends React.Component {
	render() {
		return (
			<div className="modal fade in" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">
								<span aria-hidden="true">x</span>
								<span className="sr-only">Close</span>
							</button>
							<h3 className="modal-title" id="myModalLabel">
								Article Saved
							</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
}