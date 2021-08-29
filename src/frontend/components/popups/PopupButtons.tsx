import React from "react";

import { Button, ButtonGroup } from "@chakra-ui/react";

import { usePopupsContext } from "../../hooks/usePopupsContext";
import { PopupButton } from "../../types/PopupButton";

type PopupButtonsProps = {
    buttons: PopupButton[];
};

export const PopupButtons = ({ buttons }: PopupButtonsProps) => {
    const { disclosure } = usePopupsContext();

    return (
        <ButtonGroup>
            {buttons.map(
                ({ title, onClick, closeOnClick, ...other }, index) => (
                    <Button
                        key={index}
                        onClick={(e) => {
                            if (onClick) onClick(e);
                            if (closeOnClick) disclosure.onClose();
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
