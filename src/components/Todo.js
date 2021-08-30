import React from "react";

// Individual Todo Li Component (For Now Div)
const Todo = ({ text, todo, todosArray, setTodosArray }) => {
	// If There Is An Element.id In State, That Matches The Todo.id That We Are Clicking On, Filter-It-Out/Remove-It From Array
	const deleteTodo = () => {
		setTodosArray(todosArray.filter(el => el.id !== todo.id));//Gives Back An Array With All The Elements That Don't Match
		//console.log(todo);//"todo" Gives Back The Element We Are Clicking On
	};

	// Turns "completed: false" To "completed: true", Then We Can Update Styles
	const completeTodo = () => {
		setTodosArray(todosArray.map(item => {
			if (item.id === todo.id) {//Does The Thing I'm Clicking On, Has The Same Id As One In The State
				return {
					...item, completed: !item.completed//Return The Item With All Its Properties & Just Modify Its Property "completed", To The Opposite Value Of It
				}
			}
			return item;//In Case It Doesn't Match, Return "item" The Way They Were
		}));
	};

	return (
		<div className="todo">
		  <li className={`todo-item ${ todo.completed ? "completed" : "" }`}>
				{ text }
			</li>

		  <button className="btn-complete" onClick={ completeTodo }>
			  <i className="fas fa-check"></i>
			</button>

			<button className="btn-delete" onClick={ deleteTodo }>
			  <i className="fas fa-trash"></i>
			</button>
		</div>
	)
};

export default Todo;