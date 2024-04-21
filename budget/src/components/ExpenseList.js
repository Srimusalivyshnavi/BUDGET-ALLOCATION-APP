import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <div className="">
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-5 py-2">Department</th>
                        <th className="px-2 py-2">Allocated Budget</th>
                        <th className="px-2 py-2">Increase by 10</th>
                        <th className="px-2 py-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
