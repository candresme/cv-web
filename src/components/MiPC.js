import React from 'react'

const MiPC = () => {
    return (
        <div className="row mt-4 text-start" style={{color:'#DAD5CF'}}>
            
            <div className="col-5">
                <p>Sistemas Operativos</p>
                <div className="row text-center">
                    <div className="col p-2 m-2">
                        <i className="fa-brands fa-windows"></i>
                        <p>Windows</p>
                    </div>

                    <div className="col p-2 m-2">                        
                        <i className="fa-brands fa-ubuntu"></i>
                        <p>Ubuntu</p>
                    </div>
                </div>
                
            </div>

            <div className="col">

                <div className="col">
                    <p><strong>Mi computador:</strong> Lenovo Legion Y540.</p>
                    <p><strong>RAM:</strong> 8,00 GB</p>
                    <p><strong>SSD:</strong> 150 GB</p>
                    <p><strong>HHD:</strong> 1 TB</p>
                </div>             
            </div>

            <div className="col">
                <p><strong>Procesador:</strong> Intel Core i7-9750H CPU @ 2.60GHz 2.59 GHz</p>
                <p><strong>Tarjeta gráfica:</strong> NVIDIA GeForce GTX 1650</p>
            </div>
        </div>
    )
}

export default MiPC
