import database from '../firebase/firebase'

const addTransactions = (transactions)=>({
    type: 'ADD_TRANSACTION',
    transactions
});

export const startAddTransaction = (transactionData = {}) => {
    return (dispatch) => {
        const {senderEmail = '', recieverEmail = '', amount = 0, time=0} = transactionData;
        const transactions = {senderEmail, recieverEmail, amount, time}
        database.ref('transactions').push(transactions).then((ref)=>{
            dispatch(addTransactions({
                id: ref.key,
                ...transactions
            }))
        })
    }
}
export const setTransactions = (transactions) => ({
      type: 'SET_TRANSACTIONS',
      transactions
})


export const startSetTransactions = () => {
      return (dispatch) => {
          return database.ref('transactions').once('value').then((snapshot)=>{
             const transactions= [];
             
             snapshot.forEach((childSnapshot)=>{
                transactions.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
             }); 
             dispatch(setTransactions(transactions));
          });
      };
};


export default addTransactions;