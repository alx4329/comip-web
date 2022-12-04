import React,{useEffect, useState} from "react";
import './Navbar.css'
import logo from '../assets/images/logo-comip2.png'
import logoblanco from '../assets/images/logo-comip2blanco.png'
import { useLocation, useNavigate } from "react-router-dom";
import { navOptions } from "../assets/data/navOptions";



const Navbar = () => {
    const navigate= useNavigate()
    const location = useLocation()
    const [white,setWhite] = useState(false)
    useEffect(function(){
        const onChange = (entries) =>{
            // console.log(entries)
            const el = entries[0]
            
            !el.isIntersecting ? setWhite(true) : setWhite(false)
            console.log(white)
        }
        const observer = new IntersectionObserver(onChange,{
            
        })
        const observeving=document.getElementById("navObserver")
        console.log(observeving)
        observer.observe(document.getElementById("navObserver"))
    })

    const goTo = (route,seccion) => {
        if(route==='mapa') return window.open("http://mapa.comip.ar/",'_blank');
        if(route==="institucional" || route==="rio"|| route==="fauna"|| route==="nav"|| route==="proyectos" || route==="agua") navigate(`/${route}/${seccion}`)
        // navigate(`/${route}`)
        else navigate(`/${route}`)
    }
    return(
        <>
            
            <div className={white?"navbar-container white":"navbar-container "} >

                <div onClick={()=>goTo("home")} className="nav-logo">
                    <img className="comip-logo-container" src={white?logo:logoblanco} alt="logo-COMIP" ></img>

                </div>
                <div className="nav-options" >
                    {
                    navOptions.map(item=>{
                        return(
                            <div className="dropdown" >
                                <button onClick={item.id==='mapa' || item.id==='contacto'?()=>goTo(item.id):null} className={location.pathname.includes(item.id)?'dropbtn-active' :"dropbtn"}>{item.text}</button>
                                {item.sections &&
                                <div className="dropdown-content" >
                                    {
                                    item.sections.map((section)=>{
                                        return(
                                            <>
                                            <div className="nav-section-container" >
                                                <a onClick={!section.subsections?()=>goTo(item.id,section.id):null} key={section.id} href={section.href} className={location.pathname.includes(section.id)?'nav-bg-hover-active':" nav-bg-hover"} >{section.text}</a>

                                                {section.subsections && 
                                                    <div className="subsections-container" >
                                                        {
                                                    section.subsections.map(sub=>{
                                                        return <a onClick={()=>goTo(item.id,sub.id)} key={sub.id} href={sub.href} className={location.pathname.includes(sub.id)?'nav-subsection-active':" nav-subsection"} >{sub.text}</a>
                                                    })
                                                            
                                                        }
                                                    </div>
                                                }
                                            </div>
                                            </>
                                        )
                                    })
                                    }
                                </div>}
                            </div>
                            
                        )
                    })

                    }
                </div>

            </div>
        </>
    )
}

export default Navbar