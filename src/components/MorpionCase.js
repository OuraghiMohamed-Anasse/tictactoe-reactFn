import "../styles/MorpionCase-style.css";

function MorpionCase(props){

    const divStyle = {
        
        height : "150px",
        width : "150px",
        outline : "solid 1px",
        float : "left",
        cursor : "pointer",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
    }

    const fillBlock = (e) => {
        e.target.innerText = props.data ;
       
        
        
    }



    return (
        <div  onClick={(e)=>fillBlock(e)} className="case"  style={divStyle}></div>
    )

}

export default MorpionCase;