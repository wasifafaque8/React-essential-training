import React from 'react';
import './App.css'
import chef from'./assets/chef.jpg'
import { useState } from 'react';


//props are used it is used to call variable from the app to header function 

//second method is by destructuring the properties we can acces directly through variable name 


//using props method 


// function Header(props){
//   console.log(props);
//   return(
//     <header>
//       <h1>{props.name} kitchen</h1>
//     </header>

//   );
// }





// destructuring method 
function Header({name}){
  console.log(name);
  return(
    <header>
      <h1>{name} kitchen</h1>
    </header>

  );
}



const items=[
  "MAccroni",
  "Pasta",
  "Maggi"
]



const disobjects =items.map((dish,i)=>({
  id:1,
  title:dish

}));
console.log(disobjects)



function Main({dishes}){
  return(
    <>
    <main>
      <img src={chef}  height={200}/>
       <ul>
      {dishes.map((dish,i)=>(                     // added key in the list items
        <li key={dish.id}>{dish.title}</li>
      ))}
    </ul>

    </main>
    
    
    
    </>
    
   
  )

}


//function is called 

function App() {

   const[status,setStatus]=useState(true);
  
  

  return(
   
    <div>
      <h1>the restaurnat is currently {" "} {status ? "open" : "closed"}</h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Open"}Restaurant
        </button>
      
      <Header name="Wasif"/>
      <Main dishes={disobjects}/>
    </div>
    
  );
}

export default App
