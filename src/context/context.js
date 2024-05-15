import React,{useReducer,createContext} from 'react';

import contextReducer from './contextReducer';

//const initialState = JSON.parse(localStorage.getItem('vikas')) || [{"amount":1523,"category":"Travel","type":"Expense","date":"2023-03-19","id":"c929257b-1f2b-4230-9295-cf0c43cbc315"},{"amount":1200,"category":"Car","type":"Expense","date":"2023-03-19","id":"cc0586f3-ec74-4030-a889-37a4d0717e2e"},{"amount":2000,"category":"Business","type":"Income","date":"2023-03-21","id":"7177068b-c9ff-4d71-accd-3623f6454578"},{"amount":1000,"category":"Salary","type":"Income","date":"2023-03-21","id":"a157a698-b18c-4ad6-80c1-09daf45adb23"}];
const initialState = JSON.parse(localStorage.getItem('vikas')) || [] 
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer,initialState);
    
    //Actions creators
    const deleteTransaction=(id)=> {
        dispatch({type:'DELETE_TRANSACTION',payload:id});

    }

    const addTransaction =(transaction)=>{
        dispatch({type:'ADD_TRANSACTION',payload:transaction});

    }

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);



    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance

        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
    
}

