import React, { useState, useEffect } from 'react';

//firebase imports
import {collection, getDocs, doc} from 'firebase/firestore';
import{ db } from '../FirebaseConfig'

import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';

const Educacion = () => {

    //Configuramos los hooks
    const [cursos, setCursos] = useState( [] );

    //Referenciamos a la DB firestore
    const cursosColeccion = collection(db, "estudios");

    //Funcion para mostrar TODOS los docs
    const getCursos = async ()   => {
        const data = await getDocs(cursosColeccion);
        
        setCursos(
            data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
        );
    };


    const Card =({fechaInicio, fechaFinal, nombre, academia, link}) =>{

        const [show, setShow]=useState(false);
        const handleShow=()=>setShow(!show);

        return (
            
            <div className="col-lg-3 rounded-4 m-3 p-3 d-flex align-items-center carta-estudios" onClick={handleShow}>
                <div className="row p-1">
                    <h5 className="fw-bold">{nombre}</h5>
                    <p>{fechaInicio} - {fechaFinal}</p>
                    <Divider className="mt-1 mb-2" sx={{ backgroundColor:"#F28705" }}/>                    
                    <span className="fw-bolder">{academia}</span>
                </div>

                <Modal
                    open={show}
                    onClose={handleShow}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="container mb-5"                
                >            
                    <iframe src={link} title={nombre} width="100%" height="80%"/>                        
                </Modal>

            </div>    
        )
    };


    //Usamos useEffect para montar el componente con la información
    useEffect( () => {
        getCursos()        
        // eslint-disable-next-line
    }, [] )


    return (
        <div className="container mt-4 text-start " style={{color:'#DAD5CF'}}>
            <div className="col w-100">
                <div className="row">
                    <h4 className="text-start fw-bold">Educación y certificaciones</h4>
                    <span>Si presionas sobre el curso podrás ver el certificado correspondiente.</span>
                </div>            
                
                <div className="row justify-content-center">
                    {                    
                        cursos.map((data)=>{
                            return(
                                <Card key={data.id} fechaInicio={data.fecha_inicio} fechaFinal={data.fecha_fin} nombre={data.titulo} academia ={data.institucion} link={data.link} />
                            )
                        })
                    }                
                </div>
            </div>
        </div>
        
    )
}

export default Educacion

