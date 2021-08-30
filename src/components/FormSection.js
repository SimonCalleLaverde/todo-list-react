import React from "react";

// Form Section Component (Input Field & Select)
const FormSection = ({ inputText, setInputText, todosArray, setTodosArray, setSelectStatus }) => {
	// Updates "inputText" Variable/State With Input's Value When Writing On The Fly (onChange)
	const updateInputText = e => {
		setInputText(e.target.value);
		//console.log(e.target.value);
	};

	// Saves Our Todos Into An Array (todosArray) Just After Submiting Whole Text (onSubmit/onClick)
	const submitSaveTodo = e => {
		// Prevents Form's Default Behavior
		e.preventDefault();

		// In Case We Have Todos Already, Pass Them Into Our Array. If Not, Then Create An Object Within Our Empty "todosArray"
		setTodosArray([
			...todosArray,
			{text: inputText, completed: false, id: Math.random() * 1000}//Better To Install A Package To Get A Unique Number, Instead Of "Math.random() * 1000"
		]);

		// Clears/Resets The "inputText" Variable/State After Submiting. Resets It To An Empty String
		setInputText("");
	};

	// Select Status Handler
	const selectStatusHandler = e => {
		setSelectStatus(e.target.value);
		//console.log(e.target.value);
	};

	return (
		<section className="form-section display-flex flex-direction-row justify-content-center align-items-center text-center">
			<form className="display-flex flex-direction-row align-items-center">
		    <input className="todo-input" type="text" name="" placeholder="Search some delightful recipes..."
		    value={ inputText } onChange={ updateInputText }/>

		    <button className="todo-button" type="submit" onClick={ submitSaveTodo }>
		      <i className="fas fa-plus-square"></i>
		    </button>

		    <div className="todos-select">
		      <select name="todos" className="filter-todo" onChange={ selectStatusHandler }>
		        <option value="all">All</option>
		        <option value="completed">Completed</option>
		        <option value="uncompleted">Uncompleted</option>
		      </select>
		    </div>
		  </form>
		</section>
	)
};

export default FormSection;