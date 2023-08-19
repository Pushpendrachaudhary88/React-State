import React, {useState} from "react";
import { FaPlus,FaMinus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";




const State2 = () => {
     let [count, setCount] = useState(0)
     //x[0], x[1]

    //    function increase(){
    //           setCount(count+1)
    //    }
 
    // function decrease(){
    //     if(count >1){
    //         setCount(count-1)
    //     }

    // }

    return(
        <div>
             <h1>Hey value is = {count} </h1>
           
               <button onClick={()=>setCount(count+1)}> <FaPlus /> </button>
               <button onClick={()=> count>1?setCount(count-1) : ""}> <FaMinus /> </button>
               <button onClick={()=>setCount(0)}> <TfiReload /> </button>
               
        </div>
    )

}


export default State2;




// x(10)