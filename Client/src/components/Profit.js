import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/numcomma';

export const Profit = () => {
   const {transactions} =useContext(GlobalContext)
   const amounts = transactions.map(transaction => transaction.amount);
   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return <div>
     <h4>Your Profit</h4>
     <h1>Ksh. {numberWithCommas(total)}</h1>
        </div>;
};
