import React from 'react';
// import { IZLoginModule } from '../../../../../modules/zcommon';
import { ListaGrupoAplicaciones } from '../lista-grupo-aplicacion/ListaGrupoAplicaciones.comp';
import {GruposAplicaciones} from '../../../../../models/grupo-aplicaciones/GrupoAplicaciones';
import './aplicaciones-generales.style.css';

// export interface ConnectedState {
//     // zLoginModule: IZLoginModule;
// }

type GrupoAplProps = {
    gruposAplicaciones: GruposAplicaciones[]
    
}


export const AplicacionesGenerales: React.FC <GrupoAplProps> = (props) => {

    
   if (props.gruposAplicaciones === undefined) {
       return(
           <div className="contenedor-principal">
               <h3>No hay aplicaciones disponibles</h3>
           </div>
       )
   }else{
       return(
            <div className="contenedor-principal">
                <h3 className="titulo-principal">APLICACIONES</h3>
                <ListaGrupoAplicaciones 
                    listaGrupoAplicaciones={props.gruposAplicaciones} 
                    // zLoginModule={props.zLoginModule}
                    />
            </div>
       )
   }
}
