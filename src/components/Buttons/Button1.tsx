import styled from "styled-components";
import { ColorType, colorMap } from "../../styleVars/colors";

export const buttonStyle = ({
    color = "blue500",
    backgroundColor = "white",
}: {
    color?: ColorType;
    backgroundColor?: ColorType;
}) => `
    font-weight: 600;
    color: ${colorMap[color]};
    font-size: 18px;
    line-height: 22px;
    border-radius: 2000px;
    padding: 12px 24px;
    background-color: ${colorMap[backgroundColor]};
    cursor: pointer;
    text-align: center;
    border: none;
    transition: all 0.3s ease;
    box-shadow: "0px 0px 16px 0px rgba(0, 0, 0, 1)";
`;

export const Button1 = styled.button<{
    color?: ColorType;
    backgroundColor?: ColorType;
    backgroundColorOnHover?: ColorType;
    fontColorOnHover?: ColorType;
}>`
    ${(props: {
        color?: ColorType;
        backgroundColor?: ColorType;
        backgroundColorOnHover?: ColorType;
        fontColorOnHover?: ColorType;
    }) => buttonStyle(props)}
    &:hover {
        background-color: ${(props) =>
            props.backgroundColorOnHover
                ? colorMap[props.backgroundColorOnHover]
                : props.backgroundColor
                  ? colorMap[props.backgroundColor]
                  : colorMap.white};
        color: ${(props) =>
            props.fontColorOnHover
                ? colorMap[props.fontColorOnHover]
                : props.color
                  ? colorMap[props.color]
                  : colorMap.blue500};
    }
`;

export const Button2 = styled.button<{
    color?: ColorType;
    backgroundColor?: ColorType;
    backgroundColorOnHover?: ColorType;
    fontColorOnHover?: ColorType;
}>`
    ${(props: {
        color?: ColorType;
        backgroundColor?: ColorType;
        backgroundColorOnHover?: ColorType;
        fontColorOnHover?: ColorType;
    }) => buttonStyle(props)}
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    border-radius: 2000px;
    padding: 8px 16px;
    &:hover {
        background-color: ${(props) =>
            props.backgroundColorOnHover
                ? colorMap[props.backgroundColorOnHover]
                : props.backgroundColor
                  ? colorMap[props.backgroundColor]
                  : colorMap.white};
        color: ${(props) =>
            props.fontColorOnHover
                ? colorMap[props.fontColorOnHover]
                : props.color
                  ? colorMap[props.color]
                  : colorMap.blue500};
    }
`;
