import * as React from 'react';
import * as Color from '../color';

export const colorManagerContext = Color.createManager();
export const ColorManagerCtx = React.createContext(colorManagerContext);
export const ColorManagerConsumer = ColorManagerCtx.Consumer;

export function ColorManagerProvider(props): JSX.Element {
  return (
    <ColorManagerCtx.Provider value={colorManagerContext}>
      {props.children}
    </ColorManagerCtx.Provider>
  );
};



