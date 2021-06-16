import React from 'react';
const TransactionListItem = ({ recieverEmail, senderEmail, amount, time }) => (
    <div >
        <div >
            <table >
                <tbody className="transactions_table_body">
                <tr >
                    <th className="transactions_table_row">{senderEmail}</th>
                    <th className="transactions_table_row">{recieverEmail}</th>
                    <th className="transactions_table_row">₹{amount}</th>
                    <th className="transactions_table_row">{time}</th>
                </tr>
                </tbody>
                
            </table>
        </div>

    </div>
);


export default TransactionListItem;