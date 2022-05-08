import React, {useState} from 'react';

import {ExpensesFilter} from './ExpenseFilter';
import {ExpenseItem} from './ExpenseItem';
import {ExpenseChart} from './ExpenseChart';
import {Card} from '../UI/Card';
import './Expenses.css';

export const Expenses = (props) => {
  const [selected, setSelected] = useState('2022');
  const onChangeFilter = (value) => {
    setSelected(value);
  };

  const filteredExpenses = props.expenses.filter(
    (x) => x.date.getFullYear().toString() === selected
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selected}
        onChangeFilter={onChangeFilter}
      ></ExpensesFilter>
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      {filteredExpenses.length === 0 ? (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      ) : (
        filteredExpenses.map((e) => {
          return <ExpenseItem expense={e} key={e.id}></ExpenseItem>;
        })
      )}
    </Card>
  );
};
