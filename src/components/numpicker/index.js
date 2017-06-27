import React, { Component } from 'react';
import './numpicker.css';

class NumPicker extends Component {
	constructor (props) {
		super(props);
		this.state = {value: ''};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	handleSubmit (event) {
		event.preventDefault();
		this.props.onSubmitNumber(this.state.value);
		this.setState({value: ""});
	}

	handleChange (event) {
		if (!isNaN(event.target.value))
			this.setState({value: Number(event.target.value)});
	}

	handleCancel (event) {
		this.props.onCloseNumpicker();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="Numpicker">
				<input autoFocus="true" type="text" className="Numpicker-input" value={this.state.value} onChange={this.handleChange}/>
				<span onClick={this.handleCancel}>X</span>
			</form>
		);
	}
}

export default NumPicker;