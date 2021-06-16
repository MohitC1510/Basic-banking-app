import React from 'react';
import database from '../firebase/firebase';

class AccountsPage extends React.Component {
   state = {
      Users: []
   }
   componentDidMount = () => {
      database.ref('Users').on('value', snapshot => {
         let User = [];
         snapshot.forEach((childsnapshot) => {
            User.push(childsnapshot.val())
         });
         this.setState({ Users: User })
      });
   };
   render() {
      return (
         <div className="content">
            <div className="content_tile">
               <div className="transactions">
                  <table className="transactions_table">
                     <thead className="transactions_table_head">
                        <tr>
                           <th className="transactions_table_row">First Name</th>
                           <th className="transactions_table_row">Last Name</th>
                           <th className="transactions_table_row">E-mail</th>
                           <th className="transactions_table_row">Mobile No.</th>
                           <th className="transactions_table_row">Balance</th>
                        </tr>
                     </thead>
                  </table>
                  <div>
                     <table>
                        <tbody classname="transactions_table_body">
                           {
                              this.state.Users.map((data) => {
                                 return (
                                    <tr>
                                       <th className="transactions_table_row1">{data.FirstName}</th>
                                       <th className="transactions_table_row1">{data.LastName}</th>
                                       <th className="transactions_table_row1">{data.email}</th>
                                       <th className="transactions_table_row1">{data.PhoneNo}</th>
                                       <th className="transactions_table_row1">₹{data.Balance}</th>
                                       
                                    </tr>
                                    
                                   
                                 )
                              })
                           }
                        </tbody>
                     </table>
                  </div>

               </div>
            </div>

         </div>

      )
   }
}

export default AccountsPage;