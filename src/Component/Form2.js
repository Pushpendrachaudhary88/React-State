import React, {useState} from "react";

const Form2 = () => {
    const [name, setName] = useState("");
    const [btnClick, setBtnClick] = useState(false);

    console.log("Name is =", name, "btn =",btnClick)

    function addName(e){
        setName(e.target.value);
        setBtnClick(false);
    }

    function reset(){
         setName("");
         setBtnClick(false);
         
    }

    return (
        <div>
             <input type="text" placeholder="Enter your name" 
               onChange={addName}
               value={name}
             />
             <button onClick={()=>setBtnClick(true)}>Submit</button>
             {/* <p> {btnClick==true && name!="" &&  name.toUpperCase()}</p>  */}
             {
                btnClick===true && name!==""  ? <p> {name.toUpperCase()}</p> : ""
             }
             <button onClick={reset}>Reset</button>
             
        </div>
    )

}

export default Form2;


// Uncontrolled Component
// controlled Component