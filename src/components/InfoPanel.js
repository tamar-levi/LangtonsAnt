import React from "react";

const InfoPanel=({steps,maxSteps, blackCount})=>{

    return(
        <div>
            <p>Steps: {steps} / {maxSteps}</p>
            <p>Black squares: {blackCount}</p>
        </div>
    );

};
export default InfoPanel;