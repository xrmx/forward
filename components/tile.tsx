import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';
import * as Type from '../types';

export interface TileProps {
  bgColor: string;
  copy: string;
  luminance: number;
  type?: Type.ColorTile;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

interface StyledTileProps {
  bgColor: string;
  luminance: number;
  type: Type.ColorTile;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

const generateTileStyles = (type: Type.ColorTile): SerializedStyles => {
  switch(type) {
    case Type.ColorTile.secondary:
      return css `
        height: 133px;
        font-size: 80px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .25), 0 7px 20px rgba(0, 0, 0, .10);
      `;
    case Type.ColorTile.primary:
    default:
    return css `
      height: 425px;
      font-size: 140px;
    `;
  }
}

const StyledTile = styled.div`
  position: relative;
  width: 100%;
  color: ${(props: StyledTileProps) => props.luminance > 0.3
    ? props.theme.get('Dracula Orchid').toRGB()
    : props.theme.get('Clouds').toRGB()
  };
  text-align: center;
  background-color: ${(props: StyledTileProps) => props.bgColor};
  ${(props: StyledTileProps) => generateTileStyles(props.type)}
`;

const StyledCopy = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: currentColor;
  font-family: 'Halant';
  -webkit-font-smoothing: antialiased;
  transform: translateY(-50%);
`;

export const Tile: React.SFC<TileProps> = (props): JSX.Element => (
  <StyledTile
    bgColor={props.bgColor}
    luminance={props.luminance}
    type={props.type || Type.ColorTile.primary}>
    <StyledCopy>{ props.copy }</StyledCopy>
  </StyledTile>
);
