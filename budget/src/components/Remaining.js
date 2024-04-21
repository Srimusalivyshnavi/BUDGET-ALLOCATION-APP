import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    // Determine alert type based on remaining budget
    const alertType = totalExpenses > budget ? 'bg-red-500' : 'bg-green-500';

    return (
        <div className={`rounded-md p-4 ${alertType}`}>
            <span className="text-white font-bold">Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
