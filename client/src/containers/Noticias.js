import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'
import New from '../components/Home/News/New';
import './Noticias.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {getNews } from '../services/news'
import NavObserver from '../components/NavObserver';
import useWindowSize from '../hooks/useWindowSize';
const Noticias = () =>{
    const windowSize = useWindowSize()
    const [noticias,setNoticias] = useState([])
    const [loading,setLoading] = useState()
    const [error,setError] = useState(null)

    
    async function fetchData() {
        setLoading(true)
        try{
            const newItems= await getNews()
            setNoticias([...noticias,...newItems])
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
                <div id='comip-info-container' >
                    <div className={windowSize.innerWidth>720?"section-title":"res-section-title"} >Últimas entradas</div>
                    <div className={windowSize.innerWidth>720?"separator-line":"res-separator-line"} ></div>
                    <br/>
                    <br/>
                    <br/>
                    <div className={windowSize.innerWidth>720?'noticias-list':'res-noticias-list'} >
                    
                    {
                        noticias?.map(item=>{
                            return <New 
                                    img={item.img}
                                    title={item.title}
                                    text={item.text}
                                    id={item.id}
                                    containerStyle={windowSize.innerWidth>720?'noticia-item-container':'res-new-container'}
                            />
                        })
                    }
                    </div>
                    
                    {loading && <Box className='loading-container' sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>}
                    <button onClick={fetchData} className="mas-noticias-btn" >Ver más Noticias</button>
                    <Footer/>
                </div>
            </div>
                <ScrollToTop div='section-container'  />
        </>
    )
}

export default Noticias