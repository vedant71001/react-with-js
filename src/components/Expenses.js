import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date.toDateString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date.toDateString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date.toDateString()}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
