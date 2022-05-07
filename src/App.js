import {ExpenseItem} from './components/ExpenseItem';
import {Card} from './components/Card';
import './App.css';

function App() {
  const expenses = [
    {id: 1, title: 'Supermarket', amount: 23.1, date: new Date(2011, 2, 12)},
    {id: 2, title: 'Car', amount: 472, date: new Date(2021, 6, 12)},
    {id: 3, title: 'House', amount: 982.1, date: new Date(2022, 4, 4)},
  ];
  return (
    <div>
      <h2>Expense Items</h2>
      <Card className="expenses">
        {expenses.map((e) => {
          return <ExpenseItem expense={e} key={e.id}></ExpenseItem>;
        })}
      </Card>
    </div>
  );
}

export default App;
