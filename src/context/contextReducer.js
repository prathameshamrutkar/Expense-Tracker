// Reducer => a function tht takes  in the old state and an action => new state

const contextReducer = (state,action) => {
    let transactions;

    function handleClick(transactions) {

       
        let email=localStorage.getItem('login');
        email=email.replace('.com','');
        let link ="https://expense-tracker-5cb0b-default-rtdb.firebaseio.com/"+email+".json";
    
               
        fetch(link, {
    
          method: 'PUT', 
          mode: 'cors', 
          body: JSON.stringify(transactions)
    
        })
        
      }

    switch(action.type){
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);
            localStorage.setItem('transactions',JSON.stringify(transactions));
            handleClick(transactions);
        
            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];//...state --spread operator,creates an object from array 
            localStorage.setItem('transactions',JSON.stringify(transactions));
            handleClick(transactions);
            return transactions;

        default:
            return state;
    }

}

export default contextReducer;