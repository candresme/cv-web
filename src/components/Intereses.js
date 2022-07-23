import React from 'react';

//Import icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import BrushIcon from '@mui/icons-material/Brush';
import PetsIcon from '@mui/icons-material/Pets';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

const Intereses = () => {

    const Caja = ({icono, texto}) =>{
        return(
            <div className="col-3 rounded-3 p-2 m-2 "  style={{backgroundColor:"#24242E"}}>
                {icono}
                <p>{texto}</p>
            </div>
        )
    };

    return (
        <div className="col" style={{color:'#DAD5CF'}}>
            
            <div className="row mt-4 text-start">
                <h5 className="text-start fw-bold">Mis intereses.</h5>
                <span>Si presiones sobre alguno puedes descubrir más al respecto.</span>
            </div>

            <div className="row justify-content-center mt-4">
                <Caja icono={<MenuBookIcon />} texto="Leer" />
                <Caja icono={<LocalAirportIcon />} texto="Viajar" />
                <Caja icono={<DinnerDiningIcon />} texto="Cocinar" />
                <Caja icono={<FreeBreakfastIcon />} texto="Café" />
                <Caja icono={<BrushIcon />} texto="Arte" />
                <Caja icono={<PetsIcon />} texto="Animales" />
                <Caja icono={<QueueMusicIcon />} texto="Música" />
                <Caja icono={<PedalBikeIcon />} texto="Bicicleta" />
                <Caja icono={<FamilyRestroomIcon />} texto="Familia" />            
            </div>
        </div>
    )
}

export default Intereses
