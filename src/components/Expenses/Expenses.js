import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        //console.log('Expenses.js');
        //console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});
    /* Versio 1
    return (      
        <Card className="expenses">
            <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
            />
            {filteredExpenses.length === 0 ? ( // versio 2 line 1: {filteredExpenses.lenght === 0 && <p>No expenses found.</p>}
              <p>No expenses found.</p>        // versio 2 line 2:{filteredExpenses.length > 0 &&
            ) : (                              
            filteredExpenses.map((expense) => (
            //{props.items.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))
            )}                      
        </Card>
    ); */

    // Versio 3
    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />  
      ));
    }

    return (
      <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
      </Card>
    );
}

export default Expenses;