import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h2 className="title">What plan today? </h2>
      <TodoList />
    </div>
  );
}

export default App;
