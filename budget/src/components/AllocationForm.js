import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if (cost > remaining) {
            alert("The value cannot exceed remaining funds £" + remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Change Allocation</h2>
            <div className='flex flex-wrap items-center'>
                <div className="flex items-center mb-3 ml-4">
                    <label className="mr-2" htmlFor="inputGroupSelect01">Department</label>
                    <select className="border border-gray-300 rounded py-1 px-2 mr-2" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing">Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    <label className="mr-2" htmlFor="inputGroupSelect02">Action</label>
                    <select className="border border-gray-300 rounded py-1 px-2 mr-2" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        className="border border-gray-300 rounded py-1 px-2 mr-2"
                        onChange={(event) => setCost(event.target.value)}
                    />

                    <button className="bg-blue-500 text-white py-1 px-3 rounded" onClick={submitEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
