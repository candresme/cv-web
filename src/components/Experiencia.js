import React from 'react';

//Import Components
import FrontExperience from './FrontExperience';
import DiseñoGrafico from './DiseñoGrafico';
import Gastronomia from './Gastronomia';

//Material imports
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Experiencia = () => {

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Contenido = () => {
        switch(value){
            
            case 'one':
              return <FrontExperience />;
      
            case 'two':
              return <DiseñoGrafico />
      
            case 'three':
              return  <Gastronomia />
              
            default:
              return
          }
    };

  return (
    <div className="row mt-5" style={{color:'#DAD5CF'}}>
        <div className="row text-start">
            <h4 className=" fw-bold" >Experiencia laboral</h4>
            <p>Tengo tres áreas de conócimiento, presiona en cualquiera de las tres y podras ver la experiencia en cada una de ellas.</p>
        </div>
        
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="#DAD5CF"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Front-End" />
                <Tab value="two" label="Diseño Gráfico" />
                <Tab value="three" label="Gastronomia" />
            </Tabs>
            <div>
                <Contenido />
            </div>
        </Box>
        
    </div>
  )
}

export default Experiencia
