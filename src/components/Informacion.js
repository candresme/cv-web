import React from 'react';

//Material components
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

//Material Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import TranslateIcon from '@mui/icons-material/Translate';

//Import Moment.js
import moment, { duration } from 'moment';
import 'moment/locale/es';

const Informacion = () => {

    const HOY = moment();
    const INICIO = moment("1994-02-28");
    const duracion = moment.duration(HOY.diff(INICIO))

  return (
    <div className="mt-4 row">

      <div className="d-flex justify-content-between">
            <div className="col-6 d-flex">
                <FavoriteIcon className="p-1" style={{color:'#DAD5CF'}}/>
                <p style={{color:'#DAD5CF'}}>Estado civil</p>
            </div>
            <div className="col text-end">
                <p style={{color:'#DAD5CF'}}>Casado</p>
            </div>
      </div>

      <div className="d-flex justify-content-between">
            <div className="col-6 d-flex">
                <CakeIcon className="p-1" style={{color:'#DAD5CF'}}/>
                <p style={{color:'#DAD5CF'}}>Edad</p>
            </div>
            <div className="col text-end">
                <p style={{color:'#DAD5CF'}}>{duracion.years()} Años, {duracion.months()}{duracion.months() < 1 ? " Mes" : " Meses"}, {duracion.days()} {duracion.days() < 1 ? " Día" : " Días"}</p>
            </div>
      </div>

      <div className="d-flex justify-content-between">
            <div className="col d-flex">
                <PhoneIcon className="p-1" style={{color:'#DAD5CF'}}/>
                <p style={{color:'#DAD5CF'}}>Teléfono</p>
            </div>
            <div className="col text-end">
                <p style={{color:'#DAD5CF'}}>+57 320 657 0723</p>
            </div>
      </div>

      <div className="d-flex justify-content-between">
            <div className="col-4 d-flex">
                <EmailIcon className="p-1" style={{color:'#DAD5CF'}}/>
                <p style={{color:'#DAD5CF'}}>Email</p>
            </div>
            <div className="col text-end">
                <p style={{color:'#DAD5CF'}}>cmejia106@gmail.com</p>
            </div>
      </div>

      <div className="d-flex justify-content-between">
            <div className="col d-flex">
                <WorkIcon className="p-1" style={{color:'#DAD5CF'}}/>
                <p style={{color:'#DAD5CF'}}>Estado laboral</p>
            </div>
            <div className="col text-end">
                <p style={{color:'#DAD5CF'}}><Chip color="success" label="Freelance/Disponible" size="small" /></p>
            </div>
      </div>

      <div className="d-flex justify-content-between">
            <div className="col d-flex">
                <TranslateIcon className="p-1" style={{color:'#DAD5CF'}}/>
                <p style={{color:'#DAD5CF'}}>Idiomas</p>
            </div>
            <div className="col text-end">                
                <Stack direction={{ xs: 'column', sm: 'row', md: 'row' }} spacing={1}>
                    <Chip label="Español/nativo" size="small" variant="outlined" style={{color:'#F28705', borderColor:'#F28705'}}/>
                    <Chip label="Inglés / B1" size="small" variant="outlined" style={{color:'#F28705', borderColor:'#F28705'}} />
                </Stack>
            </div>
      </div>
      
    </div>
  )
}

export default Informacion
