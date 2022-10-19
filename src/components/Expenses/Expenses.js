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
        {props.items.map((elements,i) => (
         <ExpenseItem 
          title = {props.items[i].title}
          amount = {props.items[i].amount}
          LocationOfExpenditure = {props.items[i].LocationOfExpenditure}
          date = {props.items[i].date}
         />
        ))}
        </Card>
    );
}

export default Expenses;