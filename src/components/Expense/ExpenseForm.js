import {useState} from 'react';
import './ExpenseForm.css';
export const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      // use latest state
      return {...prevState, enteredTitle: event.target.value};
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      // use latest state
      return {...prevState, enteredAmount: event.target.value};
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      // use latest state
      return {...prevState, enteredDate: event.target.value};
    });
  };

  const submitHandler = (event) => {
    // The preventDefault() method of the Event interface tells the user agent
    // that if the event does not get explicitly handled, its default action
    // should not be taken as it normally would be.
    event.preventDefault(); // js default function;

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    console.log(expenseData);
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
