import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2">{props.name}</td>
            <td className="px-4 py-2">£{props.cost}</td>
            <td className="px-4 py-2">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => increaseAllocation(props.name)}
                >
                    Increase by £10
                </button>
            </td>
            <td className="px-4 py-2">
                <TiDelete
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                    size='1.5em'
                    onClick={handleDeleteExpense}
                />
            </td>
        </tr>
       </>
    );
};

export default ExpenseItem;

