import React, {useState} from "react";

//    let x = useState(0) // [0, function(){}]
//    a = x[0] = 0 
//    b =  x[1] = function(){}
let a = 10 
console.log("I am outside the component")


const State1 = () => {
   
    let [count, setCount] =  useState(0) //count = 0
   /*  count = 0
    count = 10

  hello => setHello 
  kite => setKite
  helloWorld => setHelloWorld
  */
     console.log("Component is getting reloaded")
        a = 10
     console.log("Value of a is = " ,a)

     function increase1(){
            a = a + 1
            console.log(a)
     }
    //  increase1()

     function increase2(){
        setCount(count+1)
     }

     return(
        <div>
            <h1>Hey value is = {a} </h1>
            <button onClick={increase1} >Increase 1</button>

            <h1>Hey value is = {count} </h1>
            <button onClick={increase2} >Increase 2</button>
        </div>
     )
}

export default State1;



// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }


// realoding