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
   //
   render() {
      return (
         <div className="contentt">
            <table className="content-table">
               <thead>
                  <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>E-mail</th>
                     <th>Mobile No.</th>
                     <th>Balance</th>
                  </tr>
               </thead>
               <tbody >
                  {
                     this.state.Users.map((data) => {
                        return (
                           <tr>
                              <td>{data.FirstName}</td>
                              <td>{data.LastName}</td>
                              <td>{data.email}</td>
                              <td>{data.PhoneNo}</td>
                              <td>₹{data.Balance}</td>
                           </tr>
                        )
                     })
                  }
               </tbody>
            </table>

         </div>


      )
   }
}

export default AccountsPage;