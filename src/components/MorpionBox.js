import { useState } from "react";
import MorpionCase from "./MorpionCase";

function MorpionBox(props) {
  
  
    const styleMainDiv = {
    height: "450px",
    width: "450px",
    border: "solid black 1px ",
    backgroundColor: "grey",
    position :"absolute",
    top : "20%",
    left : "35%",
    
  };

  const [count , setCounter] =useState(1);
  const [content , setContent] = useState("X");

  function changeSymbole() {
        if (count % 2 === 0) {
            setContent("X");
        }
        else {
            setContent('O');
        }
    }

  const wrapMethod =()=>{
    changeSymbole();
    setCounter(count => count +1);
    
}
  
  return (
    <>
      <div onClick={wrapMethod}  style={styleMainDiv}>
            <MorpionCase  data = {content} />
            <MorpionCase data = {content} />
            <MorpionCase data = {content} />
            <MorpionCase data = {content} />
            <MorpionCase data = {content} />
            <MorpionCase data = {content} />
            <MorpionCase data = {content} />
            <MorpionCase data = {content} />
            <MorpionCase data = {content} />
    </div>
    </>
  );
}

export default MorpionBox;
