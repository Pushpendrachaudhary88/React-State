import React, { useState } from "react";


const FormValidation = () => {
   // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPass] = useState("");
    // const [confirmPass, setConfirmPass] = useState("");
    const [user, setUser] = useState({name:"", email:"", password:"", confirmPass:""})
    const [error, setError] = useState()
    const [success, setSuccess] = useState("")

      console.log(user)
      
    //   step 1: my name should be atleast of 2 words 
    //   step 2: my email should be valid
    //   step 3: my password should be atleast 8 characters long
    //   step 4: my confirm password should match with password
    // display the error message if any of the above condition is not met
    // display the success message if all the above condition is met
     const {name, email, password, confirmPass} = user;  // destructuring
    
      function submitForm(e){
          e.preventDefault()

          if(!name || !email || !password || !confirmPass){
            setError("All Fields are required")
            setSuccess("")
            return
          }
          if(name.trim().includes(" ")=== false){
            setError("Name should be atleast 2 Words")
            setSuccess("")
            return
          }
           if(email.includes("@")  === false){
            setError("Email Should be Valid")
            setSuccess("")
            return
           }

           if(password.length < 8){
            setError("Password should be atleast 8 characters long")
               setSuccess("")
           return
          }
           if(password !== confirmPass){
            setError("Password and confirm password should match")
               setSuccess("")
            return
          }

           setSuccess("Form submitted successfully")
            setError("")
            
    }

  return (
    <div>
        {

            error && <h3 style={{color:"red"}}>{error}</h3>
        }
        {

            success && <h3 style={{color:"green"}}> {success}</h3>
        }





      <form onSubmit={submitForm} >
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <input
          type="password"
          placeholder="Enter Your ConfirmPass"
          onChange={(e) => setUser({ ...user, confirmPass: e.target.value })}
        />

        <button type="submit">Submit</button>

       
      </form>
    </div>
  ) 
 }

export default FormValidation
