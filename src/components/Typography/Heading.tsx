import styled from "styled-components";
import { ColorType, colorMap } from "../../styleVars/colors";

export const headingStyle = ({ color = "black" }: { color?: ColorType }) => `
    font-weight: 300;
    color: ${colorMap[color]};
    font-size: 44px;
    letter-spacing: -0.2px;
    line-height: 50px;

    text-align: center;
    margin-bottom: 20px;
`;

export const Heading1 = styled.h1<{
    color?: ColorType;
}>`
    ${(props: { color?: ColorType }) => headingStyle(props)}
`;

export const Heading2 = styled.h2<{
    color?: ColorType;
}>`
    ${(props: { color?: ColorType }) => headingStyle(props)}
    text-decoration: underline;
    text-decoration-color: ${colorMap.orange400};
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
`;

export const Heading3 = styled.h2<{
    color?: ColorType;
}>`
    ${(props: { color?: ColorType }) => headingStyle(props)}
    font-size: 32px;
    line-height: 36px;
    margin: 0px;
    max-width: 100%;

    text-decoration: underline;
    text-decoration-color: ${colorMap.orange400};
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
`;
