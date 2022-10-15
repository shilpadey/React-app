import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const amount = props.amount;
    const deleteHandler = () => {
      console.log("Clicked!!!");
    }
    
    return (
     <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <ExpenseDetails title = {props.title} LocationOfExpenditure = {props.LocationOfExpenditure} amount = {amount}/>
        <button onClick={deleteHandler}>Delete</button>
     </Card>
    );
}

export default ExpenseItem