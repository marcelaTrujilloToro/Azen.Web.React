import * as React from 'react';
import { connect } from 'react-redux';

import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { IZAplState, IZComandoFormaState } from "../../zcommon/contracts";

import { Actions as ZAplicacionActions } from "../../zaplicacion/actions";

import {
    OwnProperties,
    ConnectedState,
    ConnectedDispatch,
    ZBarraComandos
} from '../components/ZBarraComandos';

const mapStateToProps = (appState: IZAplState): ConnectedState => ({
    estaProcesandoRequestServidor:appState.estaProcesandoRequestServidor
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IZAplState, void, Action>): ConnectedDispatch => ({
    despacharComandoLineaEstado: (zcomandoFormaState: IZComandoFormaState) => 
        dispatch(ZAplicacionActions.despacharComandoLineaEstado(zcomandoFormaState))
});

export const ZBarraComandosContainer: React.FC<OwnProperties> =
    connect<ConnectedState, ConnectedDispatch, OwnProperties>(mapStateToProps, mapDispatchToProps)(ZBarraComandos);