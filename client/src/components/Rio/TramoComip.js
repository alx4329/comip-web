import React from "react";
import { tramoComip } from "../../assets/data/rio/tramocomip";
import CountryMaps from "./CountryMaps";

const TramoComip = () =>{
    const paraguay=[
        {headline:"",img:"",references:[]}
    ]
    return(
        <>
            <div className="tramo-comip-text" >
            El área de incumbencia de la COMIP comprende el río Paraná en el tramo limítrofe entre Argentina y Paraguay, desde la desembocadura del río Iguazú hasta su confluencia con el río Paraguay. Se excluye de su competencia las facultades otorgadas a la entonces Comisión Mixta Paraguayo-Argentina de Yacyretá-Apipé (1958), sucedido por la Entidad Binacional Yacyretá (Tratado de Yacyretá – 1973).
            </div>
            <br/>
            <div className="mapas-title" >
            Mapas temáticos: ARGENTINA Y PARAGUAY. Para su confección se consultaron fuentes oficiales de cada país.    
            </div>
            <br/>
            <div className="country-map-title" >PARAGUAY</div>
            <CountryMaps list={tramoComip.paraguay} />
            <div className="country-map-title" >ARGENTINA</div>
            <CountryMaps list={tramoComip.argentina} />
        </>
    )
}

export default TramoComip