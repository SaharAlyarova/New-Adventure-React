import './App.css';
import Counter from './usereduser/counter';
import ReduserCounter from './usereduser/redusercounter';
import TodoApp from './usereduser/todoApp';
import ToDoReduce from './usereduser/todoreduser';

function App() {
  return (
    <div className="App">
  <Counter/>
  <hr /> <hr /> <hr />
  <ReduserCounter/>
  <hr /><hr /><hr />
  <TodoApp/>
  <hr /><hr /><hr />
  <ToDoReduce/>
    </div>
  );
}

export default App;
