import React,{useState} from "react"


const StateWithObject = () =>{
    let [coins,setCoins] = useState({gold:0, silver:0, bronze:0})
    console.log("value of the coin",coins);



    function increaseGold(){
        setCoins({...coins , gold:coins.gold+1})
        
    }


    return (
        <div>
               <h1>Gold = {coins.gold}, Silver = {coins.silver}, Bronze = {coins.bronze} </h1>
                <button onClick={increaseGold}>Increase Gold</button>
                <button onClick={()=>setCoins({...coins, silver:coins.silver+1})}>Increase Silver</button>
                <button onClick={()=> setCoins({...coins,bronze:coins.bronze+1})}>Incraese Bronze</button>



        </div>

    )
}
export default StateWithObject;