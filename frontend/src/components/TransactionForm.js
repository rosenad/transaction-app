import React, { Component } from 'react';
import axios from 'axios';

class TransactionForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		gender: '',
		city: '',
    	street: '',
    	phone: '',
    	totalPrice: '',
    	currency: '',
    	creditCardType: '',
    	creditCardNumber: '',
    	onEdit: false,
    	transactionId: -1
	}

	render() {
		return (
			<form onSubmit= { this.handleOnSubmit }>
				<input name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} /> <br/>
				<input name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} /> <br/>
				<input name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} /> <br/>
				<input name="gender" placeholder="Gender" value={this.state.gender} onChange={this.handleInputChange} /> <br/>
				<input name="street" placeholder="Street" value={this.state.street} onChange={this.handleInputChange} /> <br/>
				<input name="city" placeholder="City" value={this.state.city} onChange={this.handleInputChange} /> <br/>
				<input name="country" placeholder="Country" value={this.state.country} onChange={this.handleInputChange} /> <br/>
				<input name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleInputChange} /> <br/>
				<input name="totalPrice" placeholder="Total Price" value={this.state.totalPrice} onChange={this.handleInputChange} /> <br/>
				<input name="currency" placeholder="Currency" value={this.state.currency} onChange={this.handleInputChange} /> <br/>
				<input name="creditCardType" placeholder="Credit Card Type" value={this.state.creditCardType} onChange={this.handleInputChange} /> <br/>
				<input name="creditCardNumber" placeholder="Credit Card Number" value={this.state.creditCardNumber} onChange={this.handleInputChange} /> <br/>
				<button type="submit"> Submit Transaction </button>
			</form>
		)
	}

  	componentWillReceiveProps(props) {
  		if (props.transactionId !== -1) {
	    	this.setState({ 
	    		onEdit: props.onEdit,
	    		transactionId: props.transactionId
	    	})

	    	axios.get('http://localhost:5000/transactions/'+ props.transactionId)
				.then(response => {
					this.setState({
						firstName: response.data.firstName,
						lastName: response.data.lastName,
						email: response.data.email,
						gender: response.data.gender,
						street: response.data.street,
						city: response.data.city,
						country: response.data.country,
				    	phone: response.data.phone,
				    	totalPrice: response.data.totalPrice,
				    	currency: response.data.currency,
				    	creditCardType: response.data.creditCardType,
				    	creditCardNumber: response.data.creditCardNumber,
				    	onEdit: true
					})
			})
				.catch((error) => {
					console.log(error);
			})

		}
  	}

	handleInputChange = e => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	handleOnSubmit = e => {
		e.preventDefault();

		const transaction = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			gender: this.state.gender,
			street: this.state.street,
			city: this.state.city,
			country: this.state.country,
	    	phone: this.state.phone,
			totalPrice: this.state.totalPrice,
			currency: this.state.currency,
			creditCardType: this.state.creditCardType,
			creditCardNumber: this.state.creditCardNumber
		}

		if (this.state.onEdit) {
			axios.post('http://localhost:5000/transactions/update/'+this.state.transactionId, transaction)
      			.then(res => {
      				console.log(res.data)
      				this.props.updateList()
      				window.location = '/';
      			});
		} else {
			axios.post('http://localhost:5000/transactions/add', transaction)
      			.then(res => {
      				console.log(res.data)
      				window.location = '/';
      		});
      	}

	}
}

export default TransactionForm