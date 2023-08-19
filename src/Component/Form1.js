import React,{useState} from "react"

const Form1 = () =>{
    const[name,setName] = useState("")


    console.log("Your Name is=",name);

    function updateName(e){

        setName(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="Enter Your Name"
             onChange = {updateName}
             />
             <p>{name}</p>




        </div>

    )

}

export default Form1