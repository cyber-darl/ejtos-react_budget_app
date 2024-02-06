import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(newBudget < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
          
            return;
        }
        setNewBudget(event.target.value);
    }
 
    
    return (
<div className='alert alert-secondary'>
<span>Budget:<b>{currency} </b> </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

