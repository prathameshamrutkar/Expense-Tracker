import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';


//custom hooks start with use 
//title will tell us if we are on income or expense
const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);//reduce used to sum up the values acc=accumulator and other is current value
  const total1 = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);//addition 
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  //curly brackets create an objects and can be used for console.log to review your code 
  //below function is adding amount for a particular category to get total amount for a category
  //new transactions with same category is used to increment the category amount variable by transaction amount
  //consider at beginning amount for salay category is zero as seen from the categories.js then we get a new salary cat transaction then we add the amount say 50 to 
  //the salary cat maount it will become 50 then next trnsaction with salary with also get added next time say 100 now sal cat is 150.
  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });


  //filtering category amount with zero value so they are not affecting chart
  const filteredCategories = categories.filter((sc) => sc.amount > 0);


  //below code is following chart js rule it requires dataset which contains an array
  const chartData = {
 

    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
      hoverOffset: 4,
      
  
      
    }], 
    labels: filteredCategories.map((c) => c.type)
    


   
  }


  return {filteredCategories,total,total1, chartData};
  //tota1 is addition
}

export default useTransactions;