import Card from './Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

function ExpenseItem(props){
    
    return (
    <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <ExpenseDetails title = {props.title} LocationOfExpenditure = {props.LocationOfExpenditure} amount = {props.amount}/>
    </Card>
    );
}

export default ExpenseItem