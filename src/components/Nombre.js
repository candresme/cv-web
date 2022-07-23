import React from 'react';

//Import Material UI
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const Nombre = () => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#F28705',
          color: '#F28705',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
    }));


    return (

        <div className="container">
           <div className="row">

            <div className="col" >
                    
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"       
              >
                <Avatar alt="Camilo Mejía" src="https://firebasestorage.googleapis.com/v0/b/cv-camilo-mejia.appspot.com/o/Fotos%20Camilo%20(3%20de%2019).png?alt=media&token=5dbdd9f2-0dc0-4b48-ab6a-b12ef2923575" sx={{ width: 120, height: 120 }} />

              </StyledBadge>
                    
              <Typography variant="h5" component="div" style={{color:'#DAD5CF'}}>Camilo Mejía.</Typography>
              <Typography variant="h6" component="div" style={{color:'#DAD5CF'}}>Front-end Developer</Typography>
              <Typography variant="h7" component="div" style={{color:'#DAD5CF'}} gutterBottom >UI/UX Lover</Typography>
                    
            </div>

          </div>     
                   
        </div>
    )
  
}

export default Nombre
