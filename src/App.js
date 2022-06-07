
import React , {useState} from 'react';
import './App.css';



function App() {

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [fullName, setFullName] = useState();
  

  const onSubmits = (event) => {
    event.preventDefault();
       setFullName(name + " " + lastName);
};

const inputEvent2 = (event) => {
  console.log(event.target.value);
  setLastName(event.target.value);
};

  const inputEvent = (event) => {
      console.log(event.target.value);
      setName(event.target.value);
  };

  return (
    <div className="App">
    <form onSubmit={onSubmits}>
    <div >
      <h1>Hello {fullName}</h1>
      <input 
             type="text" 
             placeholder='enter your name' 
             onChange={inputEvent}
             value={name}
             />

          <br/>

      <input 
             type="text" 
             placeholder='password' 
             onChange={inputEvent2}
             value={lastName}
             />
      <button type= "submit">click me</button>
     
    </div>
    </form>
    </div>
  );
}

export default App;
