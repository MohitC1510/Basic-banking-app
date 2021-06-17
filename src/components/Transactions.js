import React from 'react';
import TransactionList from './TransactionList'


class TransactionPage extends React.Component{

  render(){
    return(
      <div className="contentt">
      <table className="content-table">
        <thead >
                <tr >
                    <th>Sender's E-mail</th>
                    <th>Reciever's E-mail</th>
                    <th>Amount sent</th>
                    <th>Time</th>
                </tr>
        </thead>
            <TransactionList/>
        </table>
             
      
      </div>
    )
  }
}

  export default TransactionPage;