import React from 'react';
import TransactionList from './TransactionList'
const TransactionPage = () => (
    <div className="content">
      <div className="content_tile">
      <div className="transactions">
      <table className="transactions_table">
        <thead className="transactions_table_head">
                <tr >
                    <th className="transactions_table_row">Sender's E-mail</th>
                    <th className="transactions_table_row">Reciever's E-mail</th>
                    <th className="transactions_table_row">Amount sent</th>
                    <th className="transactions_table_row">Time</th>
                </tr>
        </thead>
      </table>
      <TransactionList/>
      </div>
      </div>
      
      
    </div>
  );
  export default TransactionPage;