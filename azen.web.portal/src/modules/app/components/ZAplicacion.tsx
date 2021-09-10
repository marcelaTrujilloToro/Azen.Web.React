import * as React from "react";

import {
  ZPantexState
} from "../../zcommon";

import { ZMenuRootContainer } from "../../zmenu/containers/ZMenuRootContainer";
import { ZProcesandoContainer } from "../../zaplicacion/containers/ZProcesandoContainer";
import { ZAplicacionContainer } from "../../zaplicacion/containers/ZAplicacionContainer";

export interface OwnProps {}

export interface ConnectedState {
  pilaZPantexState: Array<ZPantexState>;
  lanzarMenu: number;
}

export interface ConnectedDispatch {}

export const  ZAplicacion: React.FC <ConnectedState & ConnectedDispatch & OwnProps> = (props) => {
  
    return (
      <div>
        {props.lanzarMenu === 1 && (
          <div>
            <ZMenuRootContainer index={0} />
          </div>
        )}

        <div>
          <ZAplicacionContainer />
        </div>

        <div>
          <ZProcesandoContainer />
        </div>
      </div>
    );
  
}