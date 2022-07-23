import React from 'react';

//Import React-Chrono
import { Chrono } from "react-chrono";

//Import Moment.js
import moment from 'moment';
import 'moment/locale/es';

const DiseñoGrafico = () => {

    const INICIO = moment("2018-05-10");
    const HOY = moment();
    const duracion = moment.duration(HOY.diff(INICIO));

    const items = [
        {
            title: "Abril 2019 - Actualmente",
            cardTitle: "Community Manager y Diseñador Gráfico",
            cardSubtitle:"Trinitario Coffee",
            cardDetailedText: ["Desarrollo de piezas gràficas y comerciales de la marca, contenido para redes sociales, fotografía, video y animación comercial."]
        },

        {
            title: "Enero 2018 - Marzo 2019",
            cardTitle: "Community Manager",
            cardSubtitle:"Taste Holding",
            cardDetailedText: ["Diseñador gráfico y community manager de los restaurantes administrados por el grupo empresarial."]
        },

        {
            title: "Abril 2018 - Actualmente",
            cardTitle: "Fotógrafo Gastronomico",
            cardSubtitle:"Lente Culinario",
            cardDetailedText: "Fotógrafo Gastronomico para diferentes restaurantes y negocios gastronomicos de la ciudad."
        },

        {
            title: "Junio 2017 - Actualmente",
            cardTitle: "Diseñador Freelance",
            cardSubtitle:"Freelance",
            cardDetailedText: ["Diseño gráfico para negocios gastronomicos"]
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

export default DiseñoGrafico
