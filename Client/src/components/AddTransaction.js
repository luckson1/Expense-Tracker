import React, {useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const {addTransaction}= useContext(GlobalContext)
    const[text, setText]=useState('');
    const[amount, setAmount]=useState(0);
    const onSubmit= e => {
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text: text,
        amount: +amount
      }
      addTransaction(newTransaction);
    }
  return <div><h3>Add new transaction</h3>
  <form onSubmit={onSubmit}>
    <div className="form-control">
      <label htmlFor="text">Text</label>
      <input type="text" value={text} onChange={(e) =>setText(e.target.value)} placeholder="Type of expense/income..." />
    </div>
    <div className="form-control">
      <label htmlFor="amount"
        >Amount <br />
        ( Add (-) negative for expense, (+) positive for income)</label
      >
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
    </div>
    <button className="btn">Add transaction</button>
  </form></div>;
};
