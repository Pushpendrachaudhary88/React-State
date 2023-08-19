import React, {useState} from "react";

// function hello(){
    
// }


// Lazy initialiing
const Lazy = () => {
     const [count, setCount] = useState(()=>{
        let sum = 0;
        for(let i=1; i<=10000; i++){
            sum = sum + i
        }
        return sum
     }) 
     console.log("The Value is",count) 

     // count = hello() = 100
    



    return (

        <div>
            <h1>Hey Value is {count}</h1>
            <button onClick={ () =>setCount(count+1)}>Increase</button>



        </div>


    )
}

export default Lazy