import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);


    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    return (
        <div className="rounded-md p-4 bg-blue-500 text-white">
            <span className="font-bold">Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
