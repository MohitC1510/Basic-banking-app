import React from 'react';
import { connect } from 'react-redux';
import TransferForm from './TransferForm';
import { startAddTransaction } from '../actions/transaction'

export class TransferPage extends React.Component {
  onSubmit = (transaction) => {
    this.props.startAddTransaction(transaction);
    alert('Transferred successfully');
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="form_main">
        <TransferForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  startAddTransaction: (transaction) => dispatch(startAddTransaction(transaction))
})

export default connect(undefined, mapDispatchToProps)(TransferPage);