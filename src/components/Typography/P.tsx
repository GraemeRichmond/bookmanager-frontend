import styled from "styled-components";
import { ColorType, colorMap } from "../../styleVars/colors";

export const PStyle = ({ color = "black" }: { color?: ColorType }) => `
    font-weight: 300;
    color: ${colorMap[color]};
    font-size: 24px;
    letter-spacing: -0.2px;
    line-height: 16px;
    margin: 0px;
    max-width: 100%;
`;

export const P1 = styled.p<{
    color?: ColorType;
}>`
    ${(props: { color?: ColorType }) => PStyle(props)}
`;

export const P2 = styled.p<{
    color?: ColorType;
}>`
    ${(props: { color?: ColorType }) => PStyle(props)}
    font-size: 16px;
    line-height: 20px;
`;
