import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  
    return (
     <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <ExpenseDetails title = {props.title} LocationOfExpenditure = {props.LocationOfExpenditure} amount = {props.amount}/>
     </Card>
    );
}

export default ExpenseItem