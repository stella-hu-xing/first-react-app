import './ExpenseItem.css';
import {ExpenseDate} from './ExpenseDate';
import {useState} from 'react';

export function ExpenseItem(props) {
  const expense = props.expense;
  const [title, setTitle] = useState(expense.title);

  const clickHandler = () => {
    setTitle('updated');
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}
