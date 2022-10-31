import React from "react";
import BottomCards from "../components/BottomCards";
import './Institutional.css'
// import HeadingPic from '../assets/images/encabezado-autoridades.png'
import Authorities from "../components/Institutional/Authorities";
import ComipInfo from "../components/Institutional/ComipInfo";
import {  useParams } from "react-router-dom";
import Rio from "./Rio";
import Convenios from "../components/Institutional/Convenios";



const Institutional = (props) =>{
    // const seccion = props.match.params.seccion
    const params = useParams();
    const {seccion} = params
    return(
        <>
            {
                seccion==="autoridades" ? 
                <Authorities  /> : (
                seccion==="infoComip" ? 
                <ComipInfo  /> : 
                    <Convenios/>
                )


            }
            
        </>
        
        
    )
}

export default Institutional