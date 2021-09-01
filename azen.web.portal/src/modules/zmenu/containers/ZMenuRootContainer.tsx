import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';
import { Action } from "redux";

import { IZAplState } from "../../zcommon/contracts";

import {
    OwnProps,
    ConnectedState,
    ConnectedDispatch,
    ZMenuRoot,
} from '../components/ZMenuRoot';

import { Actions as AppActions } from '../../app/actions';
import { ThunkDispatch } from 'redux-thunk';

const mapStateToProps = (appState: IZAplState): ConnectedState => ({
    zMenu: appState.zMenuModule.zmenu,
    idApl: appState.idApl,
    username: appState.zLoginModule.username,

    parametrosActivacionObj: appState.parametrosActivacionObj,

    ponerModal: appState.zPantexStateModule.pilaPantexState.allIds.length > 0
        ?
        appState.zPantexStateModule.pilaPantexState.byId[appState.zPantexStateModule.pxAlTope] ?
            appState.zPantexStateModule.pilaPantexState.byId[appState.zPantexStateModule.pxAlTope].esModal
            : false
        : false,

    estaProcesandoRequestServidor: appState.estaProcesandoRequestServidor,
    tipoAJAXIndicador: appState.tipoAJAXIndicador,
});


const mapDispatchToProps = (dispatch: ThunkDispatch<IZAplState, void, Action>): ConnectedDispatch => ({
    despacharOpcionMenu: (zmenuItemModel: any) => null,
    activarLogConsola: (nivelLog: number) => dispatch(AppActions.setNivelLog(nivelLog)),
});

export const ZMenuRootContainer: React.FC<OwnProps> =
    connect<ConnectedState, ConnectedDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(ZMenuRoot);