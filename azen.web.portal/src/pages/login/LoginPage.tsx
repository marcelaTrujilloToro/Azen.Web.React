import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './loginPage.style.css';


const LoginPage = () => {

  const [login, setLogin] = useState({
    nombre: "azen",
    contraseña: "123azen"
  });

  const history = useHistory();

    return (
        <div className="fondo-login">
        <Grid className="">
          <Row className="mt-5 ml-5 mr-5">
            <Col lg={5} md={6} sm={12} className="bienvenido text-success">
              <h1 className="shadow-sm text-success mt-8 p-3 text-center rounded titulo-bienvenido">
                Bienvenid@
              </h1>
              <img
                className="mt-5"
                src="https://github.com/marcelaTrujilloToro/loteriApp.ionic.react/blob/main/public/assets/img/splash/LoteriApp_azen_96x30.png?raw=true"
                alt=""
              />
            </Col>
  
            <Col
              lg={7}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg text-center container-login"
            >
              <h2 className="shadow-sm text-success mt-30 p-3 text-center rounded ">
                Ingreso
              </h2>
  
              <img
                className="mt-5"
                src="https://img.icons8.com/cute-clipart/64/26e07f/password.png"
                alt="icon"
              />
  
              <Form className="m-30">
                <FormGroup controlId="formBasicEmail">
                  <h4>Usuario:</h4>
                  <FormControl
                    type="username"
                    placeholder="Nombre usuario"
                    value={login.nombre}
                    
                  />
                </FormGroup>
  
                <FormGroup controlId="formBasicPassword">
                  <h4>Contraseña:</h4>
                  <FormControl
                    type="password"
                    placeholder="Contraseña"
                    value={login.contraseña}
                    
                  />
                </FormGroup>
  
                <Button
                  bsStyle="success btn-block"
                  bsSize="large"
                  type="button"
                  onClick={() => {
                
                    history.replace({
                      pathname: `/home`,
                    });
    
                  }}
                  
                >
                  Ingresar
                </Button>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
};
export default LoginPage;