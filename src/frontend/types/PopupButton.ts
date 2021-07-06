import { ButtonProps } from "@chakra-ui/react";

export type PopupButton = {
    title: string;
    closeOnClick?: boolean;
} & ButtonProps;
