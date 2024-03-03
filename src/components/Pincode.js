import axios  from "axios";
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
const Pincode=({number,setNumber,setData})=>{
    const[isLoading,setIsLoading]=useState(false);
   const navigate = useNavigate(); 
    async function pincodeDetails( ){
        if((number.length)!==6){
            alert("The Code is not 6 Digits " )
        }else{
            setIsLoading(true);
            try{
       const response= await axios.get(`https://api.postalpincode.in/pincode/${number}`)
      setData(response.data[0]);
      navigate('/details');
        }catch (error) {
            console.error("Error fetching data:", error);
        
        } finally {
            setIsLoading(false); 
        }
    }
        
    }
    function updateNumber(e){
        
        setNumber(e.target.value)
        
    }
    return(
        <div className="pincode-padding">
         <h1>Enter Pincode</h1>
         <input  className="input"type="number" placeolder="Pincode" value={number} name="number"
         onChange={updateNumber}/>
         <div>
            <button class="button" onClick={pincodeDetails}>Lookup</button>
        </div>
        {isLoading && <center><div className="loader"></div></center>} 
        </div>
    )
}
export default Pincode;