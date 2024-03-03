import React,{useState} from "react";
import Pincode from "./components/Pincode";
import Details from "./components/Details";
import {Routes,Route} from "react-router-dom"


const App=()=>{
  const [data,setData]=useState([]);
  const [number,setNumber]=useState(" ") ;
  return(
    <div>
      <Routes>
        <Route path="/" element={<Pincode number={number}setNumber={setNumber} setData={setData}/>}/>
         <Route path="/details" element={<Details number={number} data={data}/>}/>
      </Routes>
    </div>
  )
}
export default App;
