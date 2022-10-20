import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('');
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((expense) => (
         <ExpenseItem 
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          LocationOfExpenditure = {expense.LocationOfExpenditure}
          date = {expense.date}
         />
        ))}
        </Card>
    );
}

export default Expenses;