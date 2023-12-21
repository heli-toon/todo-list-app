import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <ul className="todolist">
        {todos.length === 0 && "No Todos Yet"}
        {todos.map((todo) => {
          return (
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          );
        })}
      </ul>
    </>
  );
}