import { ReactNode } from "react";
import styled from "styled-components";

export interface FlexItemProps {
    children: ReactNode;
    order?: number;
    grow?: number;
    shrink?: number;
    basis?: string;
    minWidth?: string;
    maxWidth?: string;
    alignSelf?:
        | "auto"
        | "flex-start"
        | "flex-end"
        | "center"
        | "baseline"
        | "stretch";
    floating?: "right";
}

const FlexItem = styled.div<FlexItemProps>`
    flex-grow: ${({ grow = 0 }) => grow};
    flex-shrink: ${({ shrink = 1 }) => shrink};
    ${({ basis }) => basis && `flex-basis: ${basis};`}
    ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
    align-self: ${({ alignSelf = "auto" }) => alignSelf};
    ${({ order }) => order && `order: ${order};`}

    ${({ floating }) => floating === "right" && `margin-left: auto;`}
`;

export default FlexItem;
