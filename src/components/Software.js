import React from 'react';

//Material components
import Stack from '@mui/material/Stack';

const Software = () => {

    const SoftwareItem = ({icono, texto})=> {
        return(
            <div className="col"  style={{color:'#DAD5CF'}}>
                <Stack className="mt-3" direction={{ xs: 'column', sm: 'row', md: 'row' }} spacing={1} justifyContent="center" alignItems="center">                        
                    <img   src={icono} alt={texto} style={{width:50}} />
                    <p className="mt-2">{texto}</p>
                </Stack>
            </div>
        );
    };


    return (
                    
        <div className="row">
            <h4 className="text-start" style={{color:'#DAD5CF'}}><strong>Software que uso</strong></h4>
                    
            <SoftwareItem icono="https://firebasestorage.googleapis.com/v0/b/cv-camilo-mejia.appspot.com/o/illustrator.png?alt=media&token=c62029e5-ad35-4a95-be4b-20e57346a8dc" texto="Illustrator" />

            <SoftwareItem icono="https://firebasestorage.googleapis.com/v0/b/cv-camilo-mejia.appspot.com/o/photoshop.png?alt=media&token=b74f77d4-21ea-4862-9df4-9475719a0740" texto="Photoshop" />

            <SoftwareItem icono="https://firebasestorage.googleapis.com/v0/b/cv-camilo-mejia.appspot.com/o/after-effects.png?alt=media&token=efaba231-bb0a-4e12-bb36-1ebc8e3032fd" texto="After Effects" />

            <SoftwareItem icono="https://firebasestorage.googleapis.com/v0/b/cv-camilo-mejia.appspot.com/o/premiere.png?alt=media&token=69c6333b-03d7-48d9-95a1-2a039e351515" texto="Premiere" />

            <SoftwareItem icono="https://firebasestorage.googleapis.com/v0/b/cv-camilo-mejia.appspot.com/o/visual-studio.png?alt=media&token=caeba92a-90fc-49a7-99b7-1e92ca0c0fb5" texto="Visual Studio" />

            <SoftwareItem icono="https://firebasestorage.googleapis.com/v0/b/cv-camilo-mejia.appspot.com/o/figma.png?alt=media&token=faad83c5-ed22-4eb4-9fef-d63bd83eab5d" texto="Figma" />
                    
        </div>
        
    )
}

export default Software
