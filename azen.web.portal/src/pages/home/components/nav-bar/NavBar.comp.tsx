import * as React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/lib/NavbarCollapse";
import NavbarHeader from "react-bootstrap/lib/NavbarHeader";
import NavbarToggle from "react-bootstrap/lib/NavbarToggle";
// import { IZLoginModule } from "../../../../modules/zcommon";
import ItemFrecuente from "../sidebar/components/frecuentes/item-frecuente/ItemFrecuente.comp";
import ItemPreferido from "../sidebar/components/preferidos/item-preferidos/ItemPreferido.comp";
import { ItemSoporte } from "./components/ItemSoporte.comp";
import "./nav-bar.style.css";

// export interface ConnectedState {
//   zLoginModule: IZLoginModule;
// }

export const NavBarComp: React.FC = () => {

  const datosIniciales= {
    "cliente": "xxx",
    "logoCliente": "xxxxx"
  };

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

  const soporte = [{
    "opc":"cta_BalancePrueba",
    "descr":"Genera el Balance de Prueba",
    "img":"1"
  }]

  return (
    <Navbar className="navbar" fixedTop={true}>
      <NavbarHeader>
        <NavbarBrand>
          <img
            src="https://github.com/marcelaTrujilloToro/loteriApp.ionic.react/blob/main/public/assets/img/splash/LoteriApp_azen_96x30.png?raw=true"
          ></img>
        </NavbarBrand>
        <NavbarToggle />
      </NavbarHeader>

      <NavbarCollapse>
        <Nav className="navbar-cliente">
          <div className="datos-cliente">
            <Navbar.Text className="navbar-text">
              {datosIniciales.cliente}
            </Navbar.Text>
            <img
              className="logo-cliente"
              src={datosIniciales.logoCliente}
              alt="logo cliente"
            ></img>
          </div>
        </Nav>

        <Nav pullRight>
        <NavDropdown title="Opciones preferidas"  id="dropdown-opciones-pref" className="hidden-sm hidden-md hidden-lg">
           {
             opcionesPreferidas.map((opcionPreferida) => {
               return(
                 <ItemPreferido
                  key={opcionPreferida.opc}
                  preferido={opcionPreferida}
                  // zLoginModule={props.zLoginModule}
                 >
                 </ItemPreferido>
               )
             })
           }

          </NavDropdown>
          <NavDropdown title="Opciones frecuentes"  id="dropdown-opciones-frec" className="hidden-sm hidden-md hidden-lg">
           {
            opcionesFrecuentes.map((opcionFrecuente) => {
               return(
                 <ItemFrecuente
                  key={opcionFrecuente.opc}
                  frecuente={opcionFrecuente}
                  // zLoginModule={props.zLoginModule}
                 >
                 </ItemFrecuente>
               )
             })
           }

          </NavDropdown>
          <NavDropdown title="Centro de soporte" id="nav-dropdown" pullRight>
            {soporte.map((opcionSoporte) => {
              return (
                <ItemSoporte
                  key={opcionSoporte.opc}
                  opcionSoporte={opcionSoporte}
                />
              );
            })}
          </NavDropdown>
          
        </Nav>


      </NavbarCollapse>
    </Navbar>
  );
};
