import React, { Component } from "react";

export default class Button extends Component {

render(){
    const{selectA,selectB,handleClick}=this.props;
        
    return(
        <div className="opciones">
            <div  className="opcion"> 
                <button id="A" onClick={handleClick} value={"A"} className="botones">A</button>
                <h1 className="parrafo">{selectA}</h1>
            </div>

            <div  className="opcion">                
                <button id="B" onClick={handleClick} value={"B"} className="botones">B</button>
                <h1 className="parrafo">{selectB}</h1>
            </div>
        </div>


    )
}
}

