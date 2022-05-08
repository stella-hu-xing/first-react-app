import React, {useState} from 'react';

import {ExpensesFilter} from './ExpenseFilter';
import {ExpenseItem} from './ExpenseItem';
import {Card} from '../UI/Card';
import './Expenses.css';

export const Expenses = (props) => {
  const expenses = props.expenses;
  const [selected, setSelected] = useState('');
  const onChangeFilter = (value) => {
    setSelected(value);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selected}
        onChangeFilter={onChangeFilter}
      ></ExpensesFilter>
      {expenses.map((e) => {
        return <ExpenseItem expense={e} key={e.id}></ExpenseItem>;
      })}
    </Card>
  );
};
