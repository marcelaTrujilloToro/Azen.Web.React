import React from "react";
// import {NavbarContainer} from '../home/components/nav-bar/NavbarContainer';
// import {SidebarContainer} from '../home/components/sidebar/sidebar/SidebarContainer';
import { NavBarComp } from "../home/components/nav-bar/NavBar.comp";
import { SidebarComp } from "../home/components/sidebar//sidebar/Sidebar.comp";
import {AplicacionesGenerales} from '../home/components/contenedor-aplicaciones/aplicaciones/AplicacionesGenerales.comp'
import './home.styles.css';

import { Col, Grid, Row } from "react-bootstrap";
import { GruposAplicaciones } from "../../models/grupo-aplicaciones/GrupoAplicaciones";

const HomePage = () => {
  

 const  gruposAplicaciones = [
    {
      "area":"Comercial",
      "aplicaciones":
      [
        {
          "apl":"azenaad",
          "descr":"Actos administrativos",
          "activo":"1"
        },
        {
          "apl":"azencrt",
          "descr":"Cartera de clientes",
          "activo":"1"
        },
        {
          "apl":"azenlon",
          "descr":"Loteria online",
          "activo":"1"
        },
        {
          "apl":"azenltr",
          "descr":"Loteria",
          "activo":"1"
        },
        {
          "apl":"azenonl",
          "descr":"Loteria online",
          "activo":"1"
        },
        {
          "apl":"azenonla",
          "descr":"Apostadores loteria online",
          "activo":"1"
        },
        {
          "apl":"azenonlv",
          "descr":"loteria online-v",
          "activo":"1"
        },
        {
          "apl":"azenprm",
          "descr":"Manejo promocionales - loteria",
          "activo":"1"
        }
      ]
    },
    {
      "area":"Financiero",
      "aplicaciones":
      [
        {
          "apl":"azencau",
          "descr":"Causaciones",
          "activo":"1"
        },
        {
          "apl":"azenctb",
          "descr":"Contanilidad ver 2.0",
          "activo":"1"
        },
        {
          "apl":"azennmn",
          "descr":"Nomina",
          "activo":"1"
        },
        {
          "apl":"azenprs",
          "descr":"Presupuesto ver 2.0",
          "activo":"1"
        }
      ]
    },
    {
      "area":"Administrativo",
      "aplicaciones":
      [
        {
          "apl":"azenact",
          "descr":"Activos Fijos",
          "activo":"1"
        },
        {
          "apl":"azenalm",
          "descr":"Almacen",
          "activo":"1"
        },
        {
          "apl":"azenaud",
          "descr":"Auditoria",
          "activo":"1"
        },
        {
          "apl":"azenctn",
          "descr":"Contratacion",
          "activo":"1"
        },
        {
          "apl":"azeninv",
          "descr":"Inventario (comercial) ver 3.0",
          "activo":"1"
        },
        {
          "apl":"azenivt",
          "descr":"Inventario (almacen)",
          "activo":"1"
        }
      ]
    },
    {
      "area":"Logistica",
      "aplicaciones":
      [
        {
          "apl":"azenejl",
          "descr":"Ejecucion logistica",
          "activo":"1"
        },
        {
          "apl":"azengsl",
          "descr":"Generales logistica",
          "activo":"1"
        },
        {
          "apl":"azenprg",
          "descr":"Programacion logistica",
          "activo":"1"
        },
        {
          "apl":"azenmto",
          "descr":"Mantenimiento",
          "activo":"1"
        }
      ]
    },
    {
      "area":"Por definir",
      "aplicaciones":
      [
        {
          "apl":"azenmsj",
          "descr":"Mensajeria",
          "activo":"1"
        }
      ]
    }
]
  return (
    <Grid className="grid-home zportal">
      <Row className="row-navbar">
        <Col>
          {/* <NavbarContainer/> */}
          <NavBarComp />
        </Col>
      </Row>

      <Row>
        <Col sm={5} md={3} className="hidden-xs">
          <SidebarComp />
        </Col>
        <Col sm={7} md={9} className="col-aplicaciones">
          <AplicacionesGenerales gruposAplicaciones={gruposAplicaciones}/>
        </Col>
      </Row>
    </Grid>
  );
};
export default HomePage;
