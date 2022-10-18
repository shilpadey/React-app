import React from "react";
import './ExpenseForm.css'

function ExpenseForm() {
    const titleHandler = (e) => {
        console.log(e.target.value)
    };
    const amountHandler = (e) => {
        console.log(e.target.value);
    };
    const dateHandler = (e) => {
        console.log(e.target.value);
    }
    return(
     <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type = 'text' onChange={titleHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type = 'number' min='0.01' step = '0.01' onChange={amountHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type = 'date' onChange={dateHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
     </form>
    );
};

export default ExpenseForm