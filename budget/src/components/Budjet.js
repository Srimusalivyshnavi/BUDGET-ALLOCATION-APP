import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        <div className='bg-gray-200 rounded-md p-4'>
            <span className='text-lg font-bold'>Budget: £{budget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
                className='w-32 border border-gray-400 rounded-md px-2 py-1 mt-2 focus:outline-none focus:border-blue-500'
            />
        </div>
    );
};

export default Budget;
