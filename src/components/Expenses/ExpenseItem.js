import React,{ useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const [amount , setTitle] = useState(props.amount);
    
    const clickHandler = () => {
      setTitle('100');
      console.log(amount);
    }
    
    return (
     <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <ExpenseDetails title = {props.title} LocationOfExpenditure = {props.LocationOfExpenditure} amount = {amount}/>
        <button onClick={clickHandler}>Change Amount</button>
     </Card>
    );
}

export default ExpenseItem