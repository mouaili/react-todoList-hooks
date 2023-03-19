import React, { useState } from 'react';
import AddTodoTask from './AddTodoTask';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
  const [todo, setTodo] = useState([
    // { id: 1, todo: 'Acheter un pc portable' },
    // { id: 2, todo: 'Faire du sport' },
    // { id: 3, todo: 'Apprendre REACT' },
  ]);

  console.log(todo);

  console.log(setTodo);

  const addOneTaskToTheList = task => {
    console.log(todo);
    setTodo([...todo, { id: uuid(), todo: task }]);
  };

  console.log(addOneTaskToTheList);

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        {todo.map((todo, id) => {
          return (
            <li key={id} className="list-group-item bg-dark text-white ">
              {todo.todo}
            </li>
          );
        })}
      </ul>
      <AddTodoTask addOneTask={addOneTaskToTheList} />
    </div>
  );
};

export default TodoList;
