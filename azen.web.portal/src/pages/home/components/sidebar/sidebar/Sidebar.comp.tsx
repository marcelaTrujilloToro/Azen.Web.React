import * as React from "react";
// import { IZLoginModule } from "../../../../../modules/zcommon";
import  ListaFrecuente  from "../components/frecuentes/lista-frecuente/ListaFrecuente.comp";
import ListaPreferidos from "../components/preferidos/lista-preferidos/ListaPreferidos.comp";
import "./sidebar.style.css";

// export interface ConnectedState {
//   zLoginModule: IZLoginModule;
// }

export const SidebarComp: React.FC  = () => {

  const opcionesPreferidas = [
    {
      "apl":"azenprs",
      "opc":"prsinf_InformeEjecucionEgresos",
      "descrOpc":"Informe de presupuesto de gasto .",
      "activo":"1"
    },
    {
      "apl":"azenctb",
      "opc":"cta_BalancePrueba",
      "descrOpc":"Genera el Balance de Prueba",
      "activo":"1"
    }
  ];
  const opcionesFrecuentes = [
    {
      "apl":"azenprs",
      "opc":"prsinf_InformeEjecucionEgresos",
      "descrOpc":"Informe de presupuesto de gasto .",
      "activo":"1"
    },
    {
      "apl":"azenctb",
      "opc":"cta_BalancePrueba",
      "descrOpc":"Genera el Balance de Prueba",
      "activo":"1"
    }
  ]

  return (
    <aside className="sidebar" >
      <div className="sidebar-navbar">
         <div>
           <ListaPreferidos 
              listaPreferidos={opcionesPreferidas} 
              // zLoginModule={props.zLoginModule}
              />
         </div>
         <hr className="divider-sidebar"/>
         <div>
           <ListaFrecuente 
                listaFrecuentes={opcionesFrecuentes} 
                // zLoginModule={props.zLoginModule} 
                />
         </div>
      </div>
    </aside>
  );
};
