import React from "react";
import BottomCards from "../components/BottomCards";
// import './Rio.css'



const Rio = () =>{
    
    
    return(
        <>

        <div className="institutional-container" >
            <div className="left-area">
                <img className="mainp" src="https://picsum.photos/500/400?grayscale" alt="Main article pic" />
            </div>
            <div className="right-area">
                <div className="title"> Ullamcorper hac magnis sociosqu fames, leo dis vehicula</div>
                <br></br>
                <div className="subtitle" >Lorem ipsum dolor sit, amet.</div>
                <div className="text" >
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit molestie quam, sapien nibh venenatis odio aenean nostra neque vehicula, dignissim arcu nec aliquet placerat sociosqu tempor nullam. Mollis vitae tellus ut inceptos laoreet donec praesent tristique consequat aliquam conubia auctor nunc, aliquet vel pellentesque nam fermentum mus ligula curae cras id accumsan. Tempus libero himenaeos gravida dictumst dapibus velit facilisi ornare nascetur auctor, lacinia eros ligula netus eget curae aptent sodales per, pharetra rutrum est augue in feugiat interdum faucibus sem. </p> 
                <p>Lacus ridiculus vitae porttitor sollicitudin cursus netus, sem dictum bibendum lobortis sapien viverra nascetur, ut turpis ullamcorper pellentesque in. Tincidunt taciti tortor natoque vel id, diam lacus netus conubia lobortis aliquet, praesent faucibus nisl egestas. Commodo magnis neque pretium aenean bibendum ut euismod, dis lacinia turpis auctor netus quam porttitor, inceptos iaculis pharetra vel non montes.</p> 
                </div>
            </div>
        </div>
        <BottomCards/>
        </>
    )
}

export default Rio