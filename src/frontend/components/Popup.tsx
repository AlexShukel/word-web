import React from "react";

import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

import { PopupButtons } from "./popups/PopupButtons";
import { usePopupsContext } from "../hooks/usePopupsContext";
import { PopupConfig } from "../types/PopupConfig";

const EmptyWrapper = ({ children }: React.PropsWithChildren<{}>) => (
    <React.Fragment>{children}</React.Fragment>
);

const PopupBody = ({
    children,
    buttons,
    BodyWrapper = EmptyWrapper,
}: PopupConfig) => {
    return (
        <BodyWrapper>
            <ModalBody>{children}</ModalBody>
            {buttons && (
                <ModalFooter>
                    <PopupButtons buttons={buttons} />
                </ModalFooter>
            )}
        </BodyWrapper>
    );
};

export const Popup = () => {
    const { popup, disclosure } = usePopupsContext();

    return (
        <Modal {...disclosure} {...popup}>
            <ModalOverlay />
            <ModalContent>
                {popup && (
                    <React.Fragment>
                        <ModalHeader>{popup.title}</ModalHeader>
                        <ModalCloseButton />
                        <PopupBody {...popup} />
                    </React.Fragment>
                )}
            </ModalContent>
        </Modal>
    );
};
