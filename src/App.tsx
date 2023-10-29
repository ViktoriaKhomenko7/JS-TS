import React from 'react';
import './App.css';

function App() {
  const names = ["Vika", "Vika", "Vika", "Vika"];

  const users = [{name: "Vika"}, {name: "Vika"}, {name: "Vika"}, {name: "Vika"},];

  const usersUsers = [{id: 123, name: "Vika"}, {id: 124, name: "Vika"}, {id: 125, name: "Vika"}, {id: 126, name: "Vika"},];



  //const liElements = users.map((u, i) => <li key={i}>{u.name}</li>)
  const liElements = usersUsers.map((u) => <li key={u.id}>{u.name}</li>)
  //const liElementsTwo = users.map((u, index) => <li>{index} - {u.name}</li>)

  //key={}


  return (
    <div className="App">
      <ul>
        <li>{liElements}</li>
      </ul>
    </div>
  );
}

export default App;
