import React from 'react';

import AttachFileIcon from '@mui/icons-material/AttachFile';


const Link = "https://firebasestorage.googleapis.com/v0/b/cv-camilo-mejia.appspot.com/o/CV%20FrontEnd%20Camilo%20Mej%C3%ADa_compressed.pdf?alt=media&token=ff4b68df-f6c1-475f-bc06-229604c7a30a"

const CV = () => {

    return (
        <div className="d-grid gap-2 p-3 mt-4">
            <a href={Link} className="btn" target="_blank" rel="noopener noreferrer" style={{color:'#F28705', borderColor:'#F28705'}}><AttachFileIcon />Descarga mi curriculo en PDF.</a>
        </div>
    )
}

export default CV
