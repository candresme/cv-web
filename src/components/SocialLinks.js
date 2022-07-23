import React from 'react';

//Import Material UI
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

//Import icons
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialLinks = () => {
  return (
    <div className='row mt-3'>

        <Stack direction="row" spacing={1} justifyContent="center"  alignItems="center">

            <Link href="https://github.com/candresme" underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
            <div className="rounded-1" style={{backgroundColor:'#F28705', width:30, height:30 }}>
                <GitHubIcon />
            </div>
            </Link>

            <Link href="https://www.behance.net/lenteculinario/" underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
            <div className="rounded-1" style={{backgroundColor:'#F28705', width:30, height:30 }}>
                <i className="fa-brands fa-behance"></i>
            </div>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=573206570723" underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
            <div className="rounded-1" style={{backgroundColor:'#F28705', width:30, height:30 }}>
                <WhatsAppIcon />
            </div>
            </Link>            

            <Link href="https://www.linkedin.com/in/camilo-mejia-developer/" underline="none" color="#24242E" target="_blank" rel="noopener noreferrer">
            <div className="rounded-1" style={{backgroundColor:'#F28705', width:30, height:30 }}>
                <LinkedInIcon />
            </div>
            </Link>
            
        </Stack>    
    </div>
  )
}

export default SocialLinks
