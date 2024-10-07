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

    return (      
        <Card className="expenses">
            <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
            />
            {filteredExpenses.map((expense) => (
            //{props.items.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))}                      
        </Card>
    );
}

export default Expenses;