import React from "react";

import { GridItem, Text } from "@chakra-ui/react";

type Placement = "top" | "center" | "bottom";

const placementAlias: Record<Placement, string> = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
};

type GridLabelProps = React.PropsWithChildren<{
    label: string;
    placement?: Placement;
}>;

export const GridLabel = ({
    label,
    children,
    placement = "center",
}: GridLabelProps) => {
    return (
        <React.Fragment>
            <GridItem
                display="flex"
                alignItems={placementAlias[placement]}
                justifyContent="flex-end"
            >
                <Text color="gray.500">{`${label.toUpperCase()}: `}</Text>
            </GridItem>
            <GridItem>{children}</GridItem>
        </React.Fragment>
    );
};
