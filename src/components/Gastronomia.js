import React from 'react';

//Import React-Chrono
import { Chrono } from "react-chrono";

//Import Moment.js
import moment from 'moment';
import 'moment/locale/es';

const Gastronomia = () => {

    const INICIO = moment("2012-04-5");
    const HOY = moment();
    const duracion = moment.duration(HOY.diff(INICIO));

    const items = [
        
        {
            title: "Agosto 2019 - Julio 2020",
            cardTitle: "Propietario",
            cardSubtitle:"El Jíbaro Coffee",
            cardDetailedText: ["Marca personal de manejo cultural del café, ofrecia consultorias, desarrollo de productos, entrenamiento a caficultores, catación y tostión de café, todo esto en una tienda de cafñe ubicada en el tradicional barrio San Antonio de Cali."]
        },

        {
            title: "Septiembre 2017",
            cardTitle: "Conferencista",
            cardSubtitle:"Bar Show Colombia",
            cardDetailedText: "Conferencia sobre el Café Colombiano de especialidad."
        },

        {
            title: "Febrero 2018 - Septiembre 2019",
            cardTitle: "Tostador de café y director de calidad.",
            cardSubtitle:"Café del Huerto",
            cardDetailedText: "Manejo de inventarios, capacitaciones, tostion de café, manejo de la calidad del café en cultivo y eventos con consumidores."
        },

        {
            title: "Abril 2016 - Diciembre 2018",
            cardTitle: "Profesor de gastronomia",
            cardSubtitle:"Politécnico Empresarial Colombiano",
            cardDetailedText: "Profesor encargado de enseñar cocteleria, cocina básica y cocina internacional."
        },

        {
            title: "Agosto 2016 - Diciembre 2017",
            cardTitle: "Profesor de gastronomia",
            cardSubtitle:"IMETY - YUMBO",
            cardDetailedText: "Profesor encargado del área de bebidas, servicio al cliente, etiqueta y protocolo y diplomados de cocina internacional."
        },

        {
            title: "Octubre 2014 - Mayo 2016",
            cardTitle: "Barista Jefe",
            cardSubtitle:"Café Celeste",
            cardDetailedText: "Preparación de bebidas en base a café, bebidas y cocteles, manejo de inventarios, caja y coordinación de horarios."
        },

        {
            title: "Agosto 2013 - Septiembre 2014",
            cardTitle: "Bartender",
            cardSubtitle:"Mansión del Rio",
            cardDetailedText: "Preparación de bebidas, cocteles, cafes y manejo de inventarios."
        },

        {
            title: "Marzo 2013 - Mayo 2013",
            cardTitle: "Chef Asesor",
            cardSubtitle:"Restaurante Origami",
            cardDetailedText: "Montaje de carta de comida asiatica, desarrollo del menù de bebidas y entrenamiento al personal."
        },

        {
            title: "Agosto 2012 - Diciembre 2012",
            cardTitle: "Chef Capacitador",
            cardSubtitle:"FoodServices de Colombia",
            cardDetailedText: "Estandarización de recetas y entrenamiento del equipo de cocina en los diferentes casinos que atendia la empresa."
        },

    ];


    return (
        <div>
            <div style={{ width: "100%", height: "100%", textAlign:"justify"}}>

                <div className="h5 text-center m-4 rounded-3 p-3" style={{border:'1px solid #F28705'}}>

                    Tiempo de experiencia: {duracion.years()} {duracion.years() > 1 ? " Años" : " Año"}, {duracion.months()}{duracion.months() > 1 ? " Meses" : " Mes"}, {duracion.days()} {duracion.days() < 1 ? " Día" : " Días"}

                </div>

                <Chrono 
                    items={items}
                    mode="VERTICAL" 
                    disableNavOnKey
                    hideControls
                    theme={{
                        primary: '#F28705',
                        secondary: '#DAD5CF',
                        cardBgColor: '#DAD5CF',
                        cardForeColor: '#24242E',
                        titleColor: '#DAD5CF',
                        titleColorActive: '#24242E',
                    }}
                    cardHeight="100%"
                    useReadMore={false}
                />
            </div>
        </div>
    )
}

export default Gastronomia
