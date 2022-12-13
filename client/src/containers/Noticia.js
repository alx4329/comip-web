import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getNewDetail } from '../services/news';
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'
import './Noticia.css'
import ItatiSlider from '../components/Proyectos/ItatiSlider';
import NavObserver from '../components/NavObserver';


const Noticia = () =>{
    const params = useParams()
    const {id} = params
    const [noticia,setNoticia] = useState([])
    const [loading,setLoading] = useState()
    const [error,setError] = useState(null)

    
    async function fetchData() {
        setLoading(true)
        try{
            const newDetail = await getNewDetail({id})
            setNoticia(newDetail)
        }catch(e){
            setError(e)
        }
        setLoading(false)
    }
    
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
        <div id='section-container' >
                <NavObserver/>
                <div className='noticia-content' >
                    {!loading &&(
                        <>
                        <div className="noticia-title" >{noticia.title}</div>
                        <div className="noticia-sep-line" ></div>
                        <br/>
                        <p className='noticia-date' >{noticia.date}</p>
                        <br/>
                        <img className='noticia-head-image' src={noticia.img} alt='ilustracion-relacionada' />
                        <br/>
                        <div className='noticia-body' dangerouslySetInnerHTML={{__html:noticia.html}}/>
                        <br/>
                        {noticia.slides?.length>0 && <ItatiSlider slides={noticia.slides} />}
                        {noticia.finalImage && <img className='noticia-head-image' src={noticia.finalImage} alt='imagen de cierre' />}
                        {noticia.videoLink && <>
                            <figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><iframe loading="lazy" title="EATF On-line | &quot;Desafios del Transporte Fluvial en el Paraguay y Paraná Superior&quot; (25.08.2022)" width="800" height="450" src={noticia.videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" desafios="" del="" transporte="" fluvial="" en="" el="" paraguay="" y="" paraná="" ></iframe></div></figure>
                        </>}
                        {
                            noticia.linkpdf && <div className="tl-ver-btn-container" >
                                                    <a className="norm-pdf-download" href={noticia.linkpdf} target='_blank' rel="noreferrer nofollow" >Ver Informe</a>
                                                </div>
                        }
                        
                        </>
                    )}
                    {loading && <Box className='loading-container' sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>}
                    
                </div>
                <Footer/>
            </div>
                <ScrollToTop div='section-container'  />
        </>
    )
}
export default Noticia