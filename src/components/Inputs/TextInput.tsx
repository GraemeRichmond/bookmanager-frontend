import styled from "styled-components";
import { ColorType, colorMap } from "../../styleVars/colors";

export const textInputStyle = ({ color = "black" }: { color?: ColorType }) => `
    font-weight: 300;
    color: ${colorMap[color]};
    font-size: 24px;
    letter-spacing: -0.2px;
    line-height: 30px;
    border: 2px solid ${colorMap.white};
    border-radius: 4px;
    padding: 8px;
    background-color: ${colorMap.orange200};
`;

export const TextInput = styled.input<{
    color?: ColorType;
}>`
    ${(props: { color?: ColorType }) => textInputStyle(props)}
`;
