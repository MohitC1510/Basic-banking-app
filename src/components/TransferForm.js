import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

class TransferForm extends React.Component{
  state={
    recieverEmail:'',
    senderEmail:'',
    amount: '',
    error:'',
    time:''
  }
  onSenderEmailChange = (e) => {
    const senderEmail=e.target.value;
    this.setState(()=>({senderEmail}))
  }
  onRecieverEmailChange = (e) => {
    const recieverEmail=e.target.value;
    this.setState(()=>({recieverEmail}))
  }
  onAmountChange = (e) => {
    const amount=e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
  }
  }
  onSubmit = (e) => {
     e.preventDefault();
     if(!this.state.recieverEmail || !this.state.senderEmail || !this.state.amount){
        this.setState(()=>({
          error: 'Please Enter all the fields'
        }))
     }
     else{
        this.setState(()=>({error: ''}));
        this.props.onSubmit({
          recieverEmail: this.state.recieverEmail,
          senderEmail: this.state.senderEmail,
          amount:parseInt(this.state.amount, 10),
          time: moment().format('lll').toString()
        })
     }
  }
  render(){
    return (
    <div>
      {this.state.error && alert("Please Enter all fields")}
      
    <form

    className="form"
     onSubmit={this.onSubmit}>
      <input
         className="text-input" 
         type="email" 
         autoFocus 
         placeholder="Enter your e-mail"
         value={this.state.senderEmail}
         onChange={this.onSenderEmailChange}/>
      <input 
      className="text-input" 
         type="email" 
         autoFocus 
         placeholder="Enter your friend's e-mail"
         value={this.state.recieverEmail}
         onChange={this.onRecieverEmailChange}/>
      <input 
      className="text-input" 
         type="text" 
         autoFocus 
         placeholder="Enter Amount"
         value={this.state.amount}
         onChange={this.onAmountChange}/>
         <div className="button_center">
         <button className="button">Transfer</button>
         </div>
      
    </form>
    
  </div>
    )
  }
}

  export default TransferForm;