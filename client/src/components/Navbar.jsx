import React from "react";
import './Navbar.css'
import logo from '../assets/logo-comip.png'
import { useNavigate } from "react-router-dom";
import {  useLocation } from "react-router-dom";


const Navbar = () => {
    const navigate= useNavigate()
    const location = useLocation()
    console.log(location.pathname)
    const options=[
        {id:"home", text:"Inicio"},
        {id:"institucional", text:"Institucional"},
        {id:"rio", text:"El Rio"},
        {id:"fauna", text:"Fauna ítica"},
        {id:"nav", text:"Navegación"},
        {id:"royecto", text:"Proyecto"},
        {id:"agua", text:"El agua"},
        {id:"mapa", text:"Mapa interactivo"},

    ]
    const goTo = (route) => {
        navigate(`/${route}`)
    }
    return(
        <div className="navbar-container" >
            <div className="nav-logo">
                <img width="110" src={logo} alt="logo-COMIP" ></img>
            </div>
            <div className="nav-options" >
                {
                    options.map(item=>{
                        return(
                            <button
                                className={location.pathname=== "/home" ? " homeNav" :"nav-button "}
                                key={item.id}
                                onClick={()=>goTo(item.id)}
                            >{item.text}</button>
                        )
                    })
                }
                <div className="separator" ></div>
                <span class="material-symbols-outlined search-icon">search</span>
            </div>

        </div>
    )
}

export default Navbar