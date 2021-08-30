import React from "react";
import Todo from "./Todo";

// Todo List Section Component
const TodoListSection = ({ todosArray, setTodosArray, filteredTodos }) => (
	<section className="todo-list-section display-flex flex-direction-row justify-content-center align-items-center">
    <div className="todos-container">
      <ul className="todos-ul">

        {filteredTodos.map(todo => <Todo key={ todo.id } text={ todo.text } todo={ todo } todosArray={ todosArray } setTodosArray={ setTodosArray }/>)}

      </ul>
    </div>
  </section>
);

export default TodoListSection;