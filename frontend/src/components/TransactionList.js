import React, { Component } from 'react'
import axios from 'axios';
import TransactionForm from './TransactionForm';

class TransactionList extends Component {
    state = {transactions: [],
             transactionId: -1}

    render() {
        return (
            <div>
                <TransactionForm 
                    transactionId = { this.state.transactionId }
                    updateList = { this.updateList }
                />
                <hr />
                <table>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Street</th>
                <th>City</th>
                <th>Country</th>
                <th>Price</th>
                <th>Currency</th>
                <th>Credit Card Type</th>
                <th>Credit Card Number</th>
                </tr>
                    <tbody>
                        {this.state.transactions.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                 <td>{item.email}</td>
                                <td>{item.street}</td>
                                <td>{item.city}</td>
                                <td>{item.country}</td>
                                <td>{item.totalPrice}</td>
                                <td>{item.currency}</td>
                                <td>{item.creditCardType}</td>
                                <td>{item.creditCardNumber}</td>
                                <td><button onClick={() => this.handleEdit(item)}>Edit</button></td>
                                <td><button onClick={() => this.handleDelete(item._id)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

  componentDidMount() {
    this.updateList()
  }

  updateList() {
    axios.get('http://localhost:5000/transactions/')
      .then(response => {
        console.log(response.data)
        this.setState({
            transactions: response.data,
              transactionId: -1
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleDelete = id =>  {
    axios.delete('http://localhost:5000/transactions/'+id)
      .then(response => {
        console.log(response.data)
    });

    this.setState({
      transactions: this.state.transactions.filter(el => el._id !== id),
      transactionId: -1
    })
    window.location = '/';
  }

  handleEdit = item => {
    this.setState({
        transactionId: item._id
    })
  }
}

export default TransactionList

