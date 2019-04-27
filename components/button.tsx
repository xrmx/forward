import styled from '@emotion/styled';
// import { css } from '@emotion/core';
// import { SerializedStyles } from '@emotion/css';
import { Size } from './size';
// import * as Type from '../types';

// export interface ButtonProps {
//     tag: string;
// }

const StyledButton = styled.input`
    padding: 13px ${Size.XS}px 12px;
`;


export const Button: React.SFC<ButtonProps> = (props): JSX.Element => {
    return (
        <StyledButton type="file"/>
    )
}


    