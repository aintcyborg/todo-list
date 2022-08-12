import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <>
      <h1 className='heading'>My Todo List</h1>
      <div className="todo-list-container">
        <TodoList />
      </div>
    </>
  );
}

export default App;
