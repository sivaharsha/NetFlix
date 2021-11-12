import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import axios from "axios";
import {useState} from 'react';
import {action,orginal} from './Constant/urls';
function App() {
  const [state,setState] = useState([])
  return (
    <div className="App">
      
     <NavBar/>
     <Banner/>
     {/* <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data)
          setState(response.data)
        })
     }}>ClickMe</button>
     {state.map((obj,index)=>{
       return (
         <div>
           <h1>{index+1}</h1>
           <h4>{obj.title}</h4>
           <h4>{obj.body}</h4>
         </div>
       )

     })} */}
     <RowPost url={orginal} title=' '/>
     <RowPost url={action} title='Action Movies'  isSmall/>
    </div>
  );
}

export default App;
