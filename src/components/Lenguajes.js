import React from 'react'

import DataObjectIcon from '@mui/icons-material/DataObject';
import ApiIcon from '@mui/icons-material/Api';

const Lenguajes = () => {

    const Caja = ({icono, texto}) =>{
        return(
            <div className="col rounded-3 p-2 m-2 align-content-center justify-content-center caja-icon">
                {icono}
                <p>{texto}</p>
            </div>
        )
    };

    return (
        <div className="">
            <h4 className="text-start" style={{color:'#DAD5CF'}}><strong>Lenguajes y Tecnologías</strong></h4>
            <div className="row justify-content-center p-2">
                <Caja  texto="JavaScript" icono={<i class="fa-brands fa-js"></i>}/>
                <Caja  texto="React.js" icono={<i class="fa-brands fa-react"></i>}/>
                <Caja  texto="Python" icono={<i class="fa-brands fa-python"></i>} />
                <Caja  texto="Django" icono={<i class="fa-brands fa-python"></i>} />
                <Caja  texto="SQL" icono={<i class="fa-solid fa-database"></i>} />
                <Caja  texto="NOSQL" icono={<i class="fa-solid fa-server"></i>} />
                <Caja  texto="HTML" icono={<i class="fa-brands fa-html5"></i>} />
                <Caja  texto="CSS" icono={<i class="fa-brands fa-css3-alt"></i>} />
                <Caja  texto="WordPress" icono={<i class="fa-brands fa-wordpress"></i>} />
                <Caja  texto="WooCommerce" icono={<i class="fa-brands fa-wordpress"></i>} />
                <Caja  texto="Git/GitHub" icono={<i class="fa-brands fa-github"></i>} />
                <Caja  texto="SVG" icono={<i class="fa-solid fa-paintbrush"></i>} />
                <Caja  texto="Bootstrap" icono={<i class="fa-brands fa-bootstrap"></i>} />
                <Caja  texto="MaterialUI" icono={<i class="fa-brands fa-uikit"></i>} />
                <Caja  texto="Firebase" icono={<i class="fa-solid fa-fire"></i>} />
                <Caja  texto="Json" icono={<DataObjectIcon />} />
                <Caja  texto="API´s" icono={<ApiIcon />} />
                <Caja  texto="SEO" icono={<i class="fa-solid fa-bullseye"></i>} />
                <Caja  texto="Responsive" icono={<i class="fa-solid fa-mobile-screen"></i>} />            
            </div>
        </div>

    )
}

export default Lenguajes
