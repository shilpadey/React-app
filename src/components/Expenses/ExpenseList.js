import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No Expense Found</h2>
    }
    if(props.items.length === 1){
        return(
            <div>
                {props.items.map((expense) => (
                 <ExpenseItem 
                   key = {expense.id}
                   title = {expense.title}
                   amount = {expense.amount}
                   LocationOfExpenditure = {expense.LocationOfExpenditure}
                   date = {expense.date}
                 />
                ))}
                <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
            </div>
        ); 
    }

    return(
        <ul className="expenses-list">
          {props.items.map((expense) => (
            <ExpenseItem 
             key = {expense.id}
             title = {expense.title}
             amount = {expense.amount}
             LocationOfExpenditure = {expense.LocationOfExpenditure}
             date = {expense.date}
            />
           ))}  
        </ul>
    );
}

export default ExpenseList