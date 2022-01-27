import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/numcomma';

export const Transaction= ({transaction}) => {
  const {deleteTransaction}=useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+';
  // let date= new Date()
  // let d=date.toLocaleDateString()
  return <li className={transaction.amount<0 ? 'minus': 'plus'}>
      {transaction.text}<span>{sign}Ksh.{numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li> ;
};
