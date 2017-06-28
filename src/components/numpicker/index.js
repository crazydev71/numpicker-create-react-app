import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './numpicker.css';

class NumPicker extends Component {
	constructor (props) {
		super(props);
		
		const options = props.options;
		options.push("...");
		this.state = {value: props.value, inputValue: "", options: options, isEditing: false};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSelectOption = this.handleSelectOption.bind(this);
		this.handleMoreOption = this.handleMoreOption.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	handleSubmit (event) {
		event.preventDefault();
		const value = Number(this.state.inputValue);
		const options = this.state.options;
		options[options.length - 1] = value;
		this.setState({value: value, options: options, isEditing: false});
		this.props.onChange(value);
	}

	handleSelectOption (val) {
		this.setState({value: val});
		this.props.onChange(val);
	}

	handleCancel (event) {
		this.setState({isEditing: false});
	}

	handleMoreOption () {
		this.setState({isEditing: true});
	}

	handleChange (event) {
		if (!isNaN(event.target.value))
			this.setState({inputValue: Number(event.target.value)})
	}

	render() {
		const options = this.state.options;

		const listOptions = options.map((option, index) => {
			if (index === options.length - 1)
				return (<span key={index} className={(option===this.state.value)? "NumPicker-option selected" : "NumPicker-option"} onClick={()=>{this.handleMoreOption();}}>{option}</span>);
			else
				return (<span key={index} className={(option===this.state.value)? "NumPicker-option selected" : "NumPicker-option"} onClick={()=>{this.handleSelectOption(option);}}>{option}</span>);
		});

		const editbox = (<form onSubmit={this.handleSubmit} className="Numpicker-editbox">
											<input autoFocus="true" type="text" className="Numpicker-input" value={this.state.inputValue} onChange={this.handleChange}/>
											<span onClick={this.handleCancel}>X</span>
										</form>);

		return (
			<div className="NumPicker">
				{!this.state.isEditing && listOptions}
				{this.state.isEditing && editbox}
			</div>
		);
	}
}

NumPicker.PropTypes = {
	onChanage: PropTypes.func,
	options: PropTypes.array,
	value: PropTypes.any
}

export default NumPicker;