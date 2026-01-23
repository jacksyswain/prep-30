import React, { useState } from "react";

function Xcalculator() {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
   setInput(input+ e.target.value)
  };

  const handleBack = () => {
   setInput(input.slice(0,-1))
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
   try{
    setInput(eval(input).toString())
   }catch(err){
    console.error(err)
   }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Calculator</h1>

      <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
      <div ><h2 style={{backgroundColor:"white",color:"black"}}>{input}</h2></div>
     

      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr) ",gap:"10px", width:"250px", paddingBottom:"20px"}}>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button onClick={handleBack}>⌫</button>

        

        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button>

       

        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="*" onClick={handleClick}>*</button>

       

        <button onClick={handleEqual}>=</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="/" onClick={handleClick}>/</button>
        <button value="+" onClick={handleClick}>+</button>

        

        
        </div>
        <button  style={{width:"120px"}} onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default Xcalculator;
