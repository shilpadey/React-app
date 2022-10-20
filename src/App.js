import React , {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummyExpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    LocationOfExpenditure: 'Dmart',
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49,
    LocationOfExpenditure: 'Bajaj Electronics', 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    LocationOfExpenditure: 'Hyd',
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    LocationOfExpenditure: 'Ikea',
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
   const [expenses,setExpense] = useState(dummyExpense);

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    setExpense((prevExpense) => {
      return [expense,...prevExpense];
    });
  };
  /*return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "let's get started"),
    React.createElement(Expenses, {items : expenses})
  );*/
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
