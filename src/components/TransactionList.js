import React from 'react';
import {connect} from 'react-redux';
import TransactionListItem from './TransactionListItems'
const TransactionList = (props) => (
    <div>
      {props.transaction.map((transaction)=>{
          return (<TransactionListItem  {...transaction}/>)
      })}
    </div>
  );

  const mapStateToProps = (state) => {
    return {
        transaction: state.transactions
    }
  }
  export default connect(mapStateToProps)(TransactionList);