import React, { Component } from 'react';
import NumPicker from '../numpicker';
import './numpickerwrapper.css';

/*class NumPickerWrapper extends Component {
	constructor (props) {
		super(props);
		this.state = {numbers:[4, 8, 16, 32, 64], isEditing: false};

		this.onSubmitNumber = this.onSubmitNumber.bind(this);
		this.onCloseNumpicker = this.onCloseNumpicker.bind(this);
		this.handleAddNumber = this.handleAddNumber.bind(this);
	}

	handleAddNumber (event) {
		this.setState({isEditing: true});
	}

	onSubmitNumber (value) {
		this.state.numbers.push(value);
		this.setState({isEditing: false});
		console.log(this.state.numbers);
	}

	onCloseNumpicker () {
		this.setState({isEditing: false})
		console.log(this.state.isEditing);
	}

	render() {
		const numbers = this.state.numbers;
		const listNumbers = numbers.map((number, index) => {
			if (index == numbers.length - 1)
				return (<span key={index} className="Numpickerwrapper-numtag selected">{number}</span>);
			else
				return (<span key={index} className="Numpickerwrapper-numtag">{number}</span>);
		});
		const numPicker = <NumPicker onSubmitNumber={this.onSubmitNumber} onCloseNumpicker={this.onCloseNumpicker}></NumPicker>;

		return (
			<div className="Numpickerwrapper">
				<span>How many players?</span>

				<div className="Numpickerwrapper-content">
					{ !this.state.isEditing && listNumbers }
					{ this.state.isEditing ? numPicker : (listNumbers, <span className="Numpickerwrapper-numtag" onClick={this.handleAddNumber}>...</span>) }
				</div>
				
			</div>
		);
	}
}*/

class NumPickerWrapper extends Component {
  state = {
    num: 4,
  };
 
  render() {
    return (
      <div>
        {this.state.num &&
          <h1>You selected the number: {this.state.num}</h1>
        }
        <NumPicker
          onChange={(val) => this.setState({ num: val })}
          value={this.state.num}
          options={[4, 8, 16, 32, 64]}
        />
      </div>
    );
  }
}

export default NumPickerWrapper;