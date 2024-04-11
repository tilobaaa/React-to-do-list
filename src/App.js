import ToDoForm from "./Components/ToDoForm";
import ListProvider from "./store/ListProvider";
import List from "./Components/List";
import "./App.css";

function App() {
  return (
    <ListProvider>
      <h1>A TO-DO LIST</h1>
      <ToDoForm />
      <List />
    </ListProvider>
  );
}

export default App;
