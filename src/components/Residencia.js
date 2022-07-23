import React, {useEffect, useState} from 'react';

//Import material components
import Typography from '@mui/material/Typography';

//import Moment.js
import moment from 'moment';
import 'moment/locale/es';

//Material UI icons
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Residencia = () => {

    const [clima, setClima]=useState({});
    const [iconClima, setIconClima]=useState("");

    const getClima = async () => {

        const API_KEY = "44e90f987d2048969b1232211222906";
        const CIUDAD = "cali";
        const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CIUDAD}&aqi=no`;

        const respuesta =  await fetch(URL);
        const data = await respuesta.json();
        setIconClima(data.current.condition);
        setClima(data.current);
        
    };
    
    useEffect(()=> {
        getClima();                
        // eslint-disable-next-line
    }, []);

    return (
        <div className="rounded-3 p-4 mt-3 m-1 row" style={{backgroundColor:"#F28705"}}>
            <div className="col">
                <div className="d-flex">
                    <LocationOnIcon />
                    <Typography><strong>Residencia</strong></Typography>
                </div>
                <div className="d-flex">                    
                    <Typography>Cali, Colombia</Typography>                    
                </div>
                <div className="d-flex">                    
                    {moment().format('dddd')}                
                </div>
                <div className="d-flex text-start">                    
                    {moment().format('L')} - {moment().format('LT')}               
                </div>                                             

            </div>
            

            <div className="col">              
                                   
                <img src={iconClima.icon} alt="" style={{margin:"auto", alignSelf:"center" }} />                  
                <Typography>{clima.temp_c} C°</Typography>      

            </div>
        </div>
    )
}

export default Residencia
