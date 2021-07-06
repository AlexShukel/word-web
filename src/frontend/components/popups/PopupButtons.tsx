import React from "react";

import { Button, ButtonGroup } from "@chakra-ui/react";

import { useChakraPopupContext } from "./ChakraPopupContext";
import { PopupButton } from "../../types/PopupButton";

type PopupButtonsProps = {
    buttons: PopupButton[];
};

export const PopupButtons = ({ buttons }: PopupButtonsProps) => {
    const { onClose } = useChakraPopupContext();

    return (
        <ButtonGroup>
            {buttons.map(
                ({ title, onClick, closeOnClick, ...other }, index) => (
                    <Button
                        key={index}
                        onClick={(e) => {
                            if (onClick) onClick(e);
                            if (closeOnClick) onClose();
                        }}
                        {...other}
                    >
                        {title}
                    </Button>
                )
            )}
        </ButtonGroup>
    );
};
