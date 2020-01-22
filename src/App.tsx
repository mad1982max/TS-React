import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodoList from './components/NewTodo';
import { Todo } from './components/todo.model'


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos(prevTodos =>[...prevTodos, {id: Math.random().toString(), text}])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodoList onAddTodo = {todoAddHandler} />
      <TodoList items = {todos} onDeleteTodo = {todoDeleteHandler}/>
    </div>
  );
}

export default App;
