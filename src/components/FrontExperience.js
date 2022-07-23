import React from 'react';

//Import React-Chrono
import { Chrono } from "react-chrono";

//Import Moment.js
import moment from 'moment';
import 'moment/locale/es';

const FrontExperience = () => {

    const INICIO = moment("2021-02-15");
    const HOY = moment();
    const duracion = moment.duration(HOY.diff(INICIO));

    const items = [
        {
            title: "Noviembre 2021 - Actualmente.",
            cardTitle: "Desarrollador React.js",
            cardSubtitle:"Trinitario Coffee",
            cardDetailedText: ["Desarrollo del menú digital con sistema de administración, creación de tienda virtual, administrador de pantallas digitales con reproductor web y el sistema para contro de horario del equipo de trabajo.", "Tecnologias usadas: HTML, CSS, Javascript, Bootstrap, Material-UI, React.js, Animate.js"]
        },

        {
            title: "Enero 2021 - Actualmente.",
            cardTitle: "Desarrollador React.js",
            cardSubtitle:"Restaurante Basilia",
            cardDetailedText: ["Desarrollo del menú digital con sistema de administración, y visualización de datos de redes sociales.", "Tecnologias usadas: HTML, CSS, Javascript, Bootstrap, Material-UI, React.js, Animate.js"]
        },

        {
            title: "Marzo 2022 - Mayo 2022",
            cardTitle: "Desarrollador junior Django",
            cardSubtitle:"Green Horizon SAS.",
            cardDetailedText: ["Desarrollo de sistemas de investigación para universidades y empresas del sector público, manejando bases de datos, servidores y creando funcionalidades nuevas para los sistemas.", "Tecnologias usadas: HTML, CSS, Javascript, Bootstrap, Material-UI, Python, Django, PostgreSQL."]
        },

        {
            title: "Agosto 2021 - Octubre 2021",
            cardTitle: "Desarrollador Web",
            cardSubtitle:"Cadena de hostales Media Luna.",
            cardDetailedText: "Desarrollo de la página web con sistema de reservas, menú digital y landingpage para cada uno de los hostales."
        },
    ];

    return (       
           <div>
                <div style={{ width: "100%", height: "100%", textAlign:"justify"}}>

                    <div className="h5 text-center m-4 rounded-3 p-3" style={{border:'1px solid #F28705'}}>

                        Tiempo de experiencia: {duracion.years()} {duracion.years() < 1 ? " Años" : " Año"}, {duracion.months()}{duracion.months() < 1 ? " Mes" : " Meses"}, {duracion.days()} {duracion.days() < 1 ? " Día" : " Días"}

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

export default FrontExperience
