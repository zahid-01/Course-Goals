import ExpenseItem from "./ExpenseItems";
import "../css/Expenses.css";
import Card from "./Card";

const Expenses = (props) => {
  let count = 1;
  const expenses = props.data;
  return (
    <Card className="expenses">
      {expenses.map((el) => (
        <ExpenseItem
          key={count++}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
