import React, { useState, useEffect } from "react";
import "./Theme.scss";
import FormSection from "./components/FormSection";
import TodoListSection from "./components/TodoListSection";

// Shopping List App Component (App)
function ShoppingListApp() {
  // States
  const [inputText, setInputText] = useState("");
  const [todosArray, setTodosArray] = useState([]);
  const [selectStatus, setSelectStatus] = useState("all");//Filter
  const [filteredTodos, setFilteredTodos] = useState([]);

  // UseEffect
  useEffect(() => {
    // Get Local Todos (Checking Or Adding)
    (() => {
      if (localStorage.getItem("todosArray") === null) {
        localStorage.setItem("todosArray", JSON.stringify([]));
      }
      else {
        let todoLocal = JSON.parse(localStorage.getItem("todosArray"));//localStorage.getItem("todosArray", JSON.stringify(todosArray));
        //console.log(todoLocal);
        setTodosArray(todoLocal);
      }
    })();
  }, []);//Runs Just When Page Refreshes, Once

  // UseEffect
  useEffect(() => {
    // Filter Handler (IIFE) (const filterHandler/filterHandler())
    (() => {
      switch(selectStatus) {
        case "completed":
          setFilteredTodos(todosArray.filter(x => x.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todosArray.filter(x => x.completed === false));
          break;
        default:
          setFilteredTodos(todosArray);
          break;
      };
    })();

    // Save To Local Storage (Adding) (IIFE (One Line (Removing "{};"))) (const saveLocalStorage/saveLocalStorage())
    (() => localStorage.setItem("todosArray", JSON.stringify(todosArray)))();

    //console.log("Filtering...");
  }, [todosArray, selectStatus]);//Runs When This States Change

  // Shopping List App
  return (
    <div className="ShoppingListApp">
      <header>
        <h1 className="display-inline-block font-headline text-500 text-huge text-uppercase">To-do List</h1>

        <div className="display-flex flex-direction-row justify-content-center">
          <div className="intro">
            Do you have any idea how long it takes those cups to decompose. Life finds a way.
            Must go faster… go, go, go, go, go! Eventually, you do plan to have dinosaurs on
            your dinosaur tour, right? Just my luck, no ice. Eventually, you do plan to have
            dinosaurs on your dinosaur tour, right?
          </div>
        </div>
      </header>

      <FormSection inputText={ inputText } setInputText={ setInputText } todosArray={ todosArray } setTodosArray={ setTodosArray } setSelectStatus={ setSelectStatus }/>

      <TodoListSection todosArray={ todosArray } setTodosArray={ setTodosArray } filteredTodos={ filteredTodos }/>
    </div>
  );
};

export default ShoppingListApp;