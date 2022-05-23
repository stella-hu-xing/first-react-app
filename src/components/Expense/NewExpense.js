import './NewExpense.css';
import {ExpenseForm} from './ExpenseForm';

export const NewExpense = (props) => {
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData, id: Math.random().toString()};
    props.onSaveNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
};
