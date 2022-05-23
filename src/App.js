import {Expenses} from './components/Expense/Expenses';
import {NewExpense} from './components/Expense/NewExpense';
import {useState} from 'react';
import './App.css';

function App() {
  const initExpenses = [
    {id: '1', title: 'Supermarket', amount: 23.1, date: new Date(2011, 2, 12)},
    {id: '2', title: 'Car', amount: 472, date: new Date(2021, 6, 12)},
    {id: '3', title: 'House', amount: 982.1, date: new Date(2022, 4, 4)},
    {id: '4', title: 'Beauty', amount: 315.1, date: new Date(2022, 9, 7)},
  ];

  const [expenses, setExpenses] = useState(initExpenses);

  const onSaveNewExpense = (expenseData) => {
    // Use prev!!!
    setExpenses((prev) => {
      return [expenseData, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onSaveNewExpense={onSaveNewExpense} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
