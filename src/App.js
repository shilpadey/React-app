import './components/ExpenseItem'
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((element,i) => (
        <ExpenseItem 
        title = {expenses[i].title}
        amount = {expenses[i].amount}
        LocationOfExpenditure = {expenses[i].LocationOfExpenditure}
        date = {expenses[i].date}>
      </ExpenseItem>
      ))}
    </div>
  );
}

export default App;
