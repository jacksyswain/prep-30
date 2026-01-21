import React, { useState } from 'react'

function Xform() {
  const [ismodal,setIsmodal]=useState(false);

  const handlesubmit=(e)=>{
      e.preventDefault();
    const name= e.target.name.value.trim()
    const email= e.target.email.value.trim()
    const password= e.target.password.value.trim()
    const number= e.target.number.value.trim()
    const date=e.target.date.value

  if(!email || !email.includes("@")){
    alert("you need to enter your email")
    return
  }
  if(!name){
    alert("you need to enter your name")
    return
  }
  if(!password ){
    alert("you need to enter valid password")
    return
  }
  if(!number ||number.length ==10 ){
    alert("you need to enter your mobile number")
    return
  }
  if(!email){
    alert("you need to enter your email")
    return
  }

      
  

  }

  return (
    <>
    <h1>hey you have to login first</h1>
    <button onClick={()=>setIsmodal(true)}>login</button>

   { ismodal && <div  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <button onClick={()=>setIsmodal(false)} style={{position:'absolute',top:0,right:0}}>X</button>
      <h2>hey you have to login first</h2>
       <form onSubmit={handlesubmit} style={{height:"50%",width:"50%"}}>
      <input type="text" name="name" placeholder="enter your name" /><br />
      <input type="email" name="email" placeholder="enter your email" /><br />
      <input type="password" name="password" placeholder="enter your password" /><br />
      <input type="number" name="number" placeholder="enter your number" /><br />
      <input type="date" name="date" /><br />

      <button type="submit">submit</button>
    </form>
    </div>
}
    </>
  )
}

export default Xform