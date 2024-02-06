import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css';


const Currency = () => {
  const { dispatch} = useContext(AppContext);

 const [newCurrency, setNewCurrency] = useState('currency');

 const handleChange = (event) => {
  setNewCurrency(event.target.value);
  
    dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value
    });
   

 };

 return (

   <div>

     <label>


       <select className='select' value={newCurrency} onChange={handleChange}>
         <option className = "hover" value="$">Currency ($ Dollar)</option>
         <option className = "hover" value="£">Currency (£ Pound)</option>
         <option className = "hover" value="€">Currency (€ Euro)</option>
         <option className = "hover" value="₹">Currency  (₹ Ruppee)</option>
       </select>

     </label>
   </div>

 );

}

export default Currency;
