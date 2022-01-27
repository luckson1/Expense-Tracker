import React from 'react';
import {Header} from './components/Header'; 
import {Profit} from './components/Profit'; 
import {IncomeExpenses} from './components/IncomeExpenses'; 
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import './App.css'

import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Profit />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
