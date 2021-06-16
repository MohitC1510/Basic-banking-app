const transactionsReducerDefaultstate = [];

const transactionReducer = (state = transactionsReducerDefaultstate, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return [
                ...state,
                action.transactions
            ];
        case 'SET_TRANSACTIONS':
            return action.transactions;    
        default:
            return state;
    }
}

export default transactionReducer;