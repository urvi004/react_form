
import React , {useState} from 'react';
import './App.css';



function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });
  
  const inputEvent = (event) => {
      console.log(event.target.value);
      console.log(event.target.name);

     // const name = event.target.name;
      //const value  = event.target.value;

      const {value, name} = event.target;
      
      setFullName((preValue) => {
        if (name=== 'fName'){
          return{
            fName: value,
          lName: preValue.lName,
          email: preValue.email,
          phone: preValue.phone
          };
          
        } else if (name==='lName'){
          return{
            fName: preValue.fName,
            lName: value,
            email: preValue.email,
            phone: preValue.phone
          }
        }
        else if (name==='email'){
          return{
            fName: preValue.fName,
            lName: preValue.lName,
            email: value,
            phone: preValue.phone
          }
        }
        else if (name==='phone'){
          return{
            fName: preValue.fName,
            lName: preValue.lName,
            email: preValue.email,
            phone: value
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
      <p> {fullName.email} </p>
      <p>{fullName.phone}</p>
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
      <input 
             type="email" 
             name='email'
             placeholder='enter your email' 
             onChange={inputEvent}
             value={fullName.email}
             />
      <input 
             type="number" 
             name='phone'
             placeholder='enter your phone number' 
             onChange={inputEvent}
             value={fullName.phone}
             />
      <button type= "submit">click me</button>
     
    </div>
    </form>
    </div>
  );
}

export default App;
