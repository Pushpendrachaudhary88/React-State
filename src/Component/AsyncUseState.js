import React, {useState} from "react";


const AysncUseState = () => {

    const [count, setCount] = useState(0);
    

    function increase1(){
           setCount(count + 2)
           setCount(count + 3)
           setCount(count + 1)
           setCount(count + 100)
    }

    // function increase2(){
    //      setCount(()=>{
    //         console.log("count1", count)
    //         return count+1
    //      })
    //      setCount(()=> {
    //         console.log("count2", count)
    //         return count+1
    //      })

    // }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase1}>Increment</button>

        </div>
    )
}

export default AysncUseState;