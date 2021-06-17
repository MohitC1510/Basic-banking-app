import React from 'react';
import { connect } from 'react-redux';
import { TransactionListItem } from './Transactions'
const TransactionList = (props) => (

  <tbody>
    {props.transaction.map((transaction) => {
      return (<tr>
        <td>{transaction.senderEmail}</td>
        <td>{transaction.recieverEmail}</td>
        <td>₹{transaction.amount}</td>
        <td>{transaction.time}</td>
      </tr>)
    })}
  </tbody>
);

const mapStateToProps = (state) => {
  return {
    transaction: state.transactions
  }
}
export default connect(mapStateToProps)(TransactionList);