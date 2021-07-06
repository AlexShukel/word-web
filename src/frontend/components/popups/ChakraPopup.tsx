import React from "react";

import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalProps,
    useDisclosure,
} from "@chakra-ui/react";

import { ChakraPopupContext } from "./ChakraPopupContext";
import { PopupButtons } from "./PopupButtons";
import { PopupButton } from "../../types/PopupButton";

export type ChakraPopupProps = Omit<ModalProps, "isOpen" | "onClose"> & {
    toggler: (onOpen: () => void) => React.ReactNode;
    title: string;
} & (
        | {
              buttons?: PopupButton[];
              renderMainLayout?: true;
          }
        | {
              buttons?: undefined;
              renderMainLayout: false;
          }
    );

export const ChakraPopup = ({
    toggler,
    title,
    buttons,
    renderMainLayout = true,
    children,
    ...other
}: ChakraPopupProps) => {
    const disclosureController = useDisclosure();

    const { onOpen, onClose, isOpen } = disclosureController;

    return (
        <React.Fragment>
            {toggler(onOpen)}
            <Modal isOpen={isOpen} onClose={onClose} {...other}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ChakraPopupContext.Provider value={disclosureController}>
                        {renderMainLayout ? (
                            <React.Fragment>
                                <ModalBody>{children}</ModalBody>
                                {buttons && (
                                    <ModalFooter>
                                        <PopupButtons buttons={buttons} />
                                    </ModalFooter>
                                )}
                            </React.Fragment>
                        ) : (
                            children
                        )}
                    </ChakraPopupContext.Provider>
                </ModalContent>
            </Modal>
        </React.Fragment>
    );
};
