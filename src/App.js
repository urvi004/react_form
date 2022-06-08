
import React , {useState} from 'react';
import './App.css';



function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  
  const inputEvent = (event) => {
      console.log(event.target.value);
      console.log(event.target.name);

      const name = event.target.name;
      const value  = event.target.value;
      
      setFullName((preValue) => {
        if (name=== 'fName'){
          return{
            fName: value,
          lName: preValue.lName,
          };
          
        } else if (name==='lName'){
          return{
            fName: preValue.fName,
            lName: value,
          }
        }
        //console.log(preValue);
      });

   };

   const onSubmits = (event) => {
   event.preventDefault();
   alert('form submitted')
   };


  return (
    <div className="App">
    <form onSubmit={onSubmits}>
    <div >
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <input 
             type="text" 
             name= "fName"
             placeholder='enter your name' 
             onChange={inputEvent}
             value={fullName.fName}
             />

          <br/>

      <input 
             type="text" 
             name='lName'
             placeholder='enter your last name' 
             onChange={inputEvent}
             value={fullName.lName}
             />
      <button type= "submit">click me</button>
     
    </div>
    </form>
    </div>
  );
}

export default App;
