import React from 'react';

import Chip from '@mui/material/Chip';



const Habilidades = () => {
    return (
        <div className="mt-3 text-start">
            <h4 className="" style={{color:'#DAD5CF'}}><strong>Habilidades blandas</strong></h4>
            <div className="col">
                <Chip label="Atención al detalle" style={{backgroundColor:'#F28705'}} size="small"/>
                <Chip label="Excelente comunicación" style={{backgroundColor:'#F28705'}} size="small" />
                <Chip label="Adaptación al cambio" style={{backgroundColor:'#F28705'}} size="small" />
                <Chip label="Trabajo en equipo" style={{backgroundColor:'#F28705'}} size="small" />
                <Chip label="Autodidacta" style={{backgroundColor:'#F28705'}} size="small" />
                <Chip label="Apasionado" style={{backgroundColor:'#F28705'}} size="small" />
                <Chip label="Resolución de problemas" style={{backgroundColor:'#F28705'}} size="small" />
                <Chip label="Paciencia" style={{backgroundColor:'#F28705'}} size="small" />
                <Chip label="Creatividad" style={{backgroundColor:'#F28705'}} size="small" />
                <Chip label="Liderazgo" style={{backgroundColor:'#F28705'}} size="small" />
            </div>
        </div>
    )
}

export default Habilidades
