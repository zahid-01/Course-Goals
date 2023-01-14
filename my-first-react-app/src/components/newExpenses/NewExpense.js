import React from "react";
import ExpenseFrom from "./ExpenseForm";
import "../css/NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseFrom onSubmitExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
