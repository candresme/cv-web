import React from 'react';

import Divider from '@mui/material/Divider';

//Import components
import Nombre from '../components/Nombre';
import SocialLinks from '../components/SocialLinks';
import AboutMe from '../components/AboutMe';
import Residencia from '../components/Residencia';
import Informacion from '../components/Informacion';
import Intereses from '../components/Intereses';
import CV from '../components/CV';
import Software from '../components/Software';
import Habilidades from '../components/Habilidades';
import MiPC from '../components/MiPC';
import Lenguajes from '../components/Lenguajes';
import Educacion from '../components/Educacion';
import Experiencia from '../components/Experiencia';

const General = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:'#252A30'}}>
        <div className="row w-100 justify-content-center">

          <div className="col-lg-3 m-4"  >                
              <div className="rounded-3 p-4" style={{backgroundColor:"#24242E"}}>
                  <Nombre />
                  <SocialLinks />
                  <AboutMe />                    
              </div>
              <Residencia />                
              <Informacion />
              {/* <Divider className="mt-3" sx={{ backgroundColor:"white" }}/>
              <Intereses />
              <Divider className="mt-3" sx={{ backgroundColor:"white" }}/> */}
              <CV />
          </div>

          <div className="col m-4 p-4 rounded-3" style={{backgroundColor:"#24242E"}} >
              
            <div className="row">
              <div className="col-sm col-md">
                <Software />
                <Divider className="mt-3" sx={{ backgroundColor:"white" }}/>
                <Habilidades />
                <Divider className="mt-4" sx={{ backgroundColor:"white" }}/>
                <MiPC />                
              </div>

              <div className="col-sm col-md">
                <Lenguajes />         
              </div>                                
            </div>

            <div className="row w-100 justify-content-center">
              <Divider className="mt-3" sx={{ backgroundColor:"white" }}/>
              <Educacion />
              <Divider className="mt-4" sx={{ backgroundColor:"white" }}/>
              <Experiencia />
            </div>

          </div>                   
        </div>
    </div>
  )
}

export default General
