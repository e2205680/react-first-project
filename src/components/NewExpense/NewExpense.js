import React from 'react'; // not mandatory to import this

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;