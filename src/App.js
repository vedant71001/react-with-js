import Expenses from "./components/Expenses";

function App() {
  let expenses = [
    {
      date: new Date(2023, 4, 8),
      title: "Car Insurance",
      amount: 250.5,
    },
    {
      date: new Date(2023, 3, 15),
      title: "Food",
      amount: 115.5,
    },
    {
      date: new Date(2022, 12, 8),
      title: "Travel",
      amount: 250.5,
    },
  ];

  return (
    <div>
      <h2>Let's Get Started</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
