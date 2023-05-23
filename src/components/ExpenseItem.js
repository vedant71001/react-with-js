import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
