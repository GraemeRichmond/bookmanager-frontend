import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";

export interface FlexContainerProps
    extends ComponentPropsWithoutRef<React.ElementType> {
    children: ReactNode;
    direction?: "row" | "column";
    alignItems?: "stretch" | "start" | "end" | "center" | "baseline";
    justifyContent?:
        | "start"
        | "end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
    rowGap?: number;
    columnGap?: number;
    wrap?: boolean;
    fullHeight?: boolean;
}

export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: ${({ direction = "row" }) => direction};
    justify-content: ${({ justifyContent = "center" }) => justifyContent};
    align-items: ${({ alignItems = "center" }) => alignItems};
    row-gap: ${({ rowGap = 24 }) => rowGap + "px"};
    column-gap: ${({ columnGap = 24 }) => columnGap + "px"};
    flex-wrap: ${({ wrap = false }) => (wrap ? "wrap" : "nowrap")};
    ${({ fullHeight = false }) => (fullHeight ? "height: 100%;" : "")}
    min-height: inherit;
`;

export const ColContainer = (props: FlexContainerProps) => (
    <FlexContainer direction={"column"} justifyContent="start" {...props} />
);

export const RowContainer = (props: FlexContainerProps) => (
    <FlexContainer {...props} />
);
