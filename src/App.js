import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './MyComponents/Header'; //rfc
import { Todos } from './MyComponents/Todos'; //rafc
import { Footer } from './MyComponents/Footer'; //rafc
import { AddTodo } from './MyComponents/AddTodo'; //rafc
import { About } from './MyComponents/About'; //rafc

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo ", todo);
    // Deleting in react does not works this way
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno
    if (todos.length === 0) {
      sno = 1;
    } else { sno = todos[todos.length - 1].sno + 1; }
    let myTodo = {
      title: title,
      desc: desc,
      sno: sno
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title="Todos List" searchBar={true} />
      <Switch>
      <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

      <Footer />
    </Router>
    </>
  );
}

export default App;
