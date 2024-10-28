import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

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


    return (
      <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
      />
      
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      </Card>
    );
}

export default Expenses;