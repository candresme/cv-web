import React from 'react';

//Material UI components
import Typography from '@mui/material/Typography';

const AboutMe = () => {
    return (
        <div className='mt-5 text-start'>
            <Typography variant="h6" component="div" style={{color:'#DAD5CF'}}><strong>Acerca de mi</strong></Typography>

            <Typography variant="p" component="div" style={{color:'#DAD5CF'}} align="justify">
            Programador web con un año de experiencia en React.js.
            </Typography>

            <br/>

            <Typography variant="p" component="div" style={{color:'#DAD5CF'}} align="justify">
            Apasionado por la experiencia de usuario, creatividad, innovación y el aprendizaje autónomo (aprendo demasiado rápido).
            </Typography>

            <br/>

            <Typography variant="p" component="div" style={{color:'#DAD5CF'}} align="justify">
            Busco un lugar donde combinar mis habilidades de diseño gráfico con el desarrollo web aportando valor al negocio y el cliente.
            </Typography>

        </div>
    )
}

export default AboutMe
