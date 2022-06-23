import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Todo } from "./models/models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);
  const [inProgress, setInProgress] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = CompletedTodos;
    let progress = inProgress;

    console.log("Active: ", active, 
    "Complete: ", complete,
    "progress: ", progress
    )
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    
    } else if (source.droppableId === "TodosRemove") {
      add = complete[source.index];
      complete.splice(source.index, 1);
    
    } else {
      add = progress[source.index];
      progress.splice(source.index, 1);
    }

    // Destination Logic
    // if (destination.droppableId === "TodosList") {
    //   active.splice(destination.index, 0, add);
    // } else if (destination.droppableId === "TodosRemove") {
    //   complete.splice(destination.index, 0, add);
    // } else {
    //   progress.splice(destination.index, 0, add);
    // }

    switch (destination.droppableId) {
      case "TodosList":
        active.splice(destination.index, 0, add);
        break;
      case "TodosRemove":
        complete.splice(destination.index, 0, add);
        break;
      case "TodosInProgress":
        progress.splice(destination.index, 0, add);
        break;
    }

    setCompletedTodos(complete);
    setTodos(active);
    setInProgress(progress);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Welcome to Joseph's Task App</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
          inProgress={inProgress}
          setInProgress={setInProgress}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
          
 
