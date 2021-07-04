import React from "react";

import {
    Button,
    ButtonGroup,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { Formik, FormikConfig } from "formik";

export type FormikPopupProps<T> = FormikConfig<T> & {
    toggler: (onOpen: () => void) => React.ReactNode;
    title: string;
    initialFocusRef?: React.RefObject<HTMLInputElement>;
};

export const FormikPopup = <T,>({
    toggler,
    title,
    initialFocusRef,
    ...other
}: FormikPopupProps<T>) => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <React.Fragment>
            {toggler(onOpen)}
            <Modal
                initialFocusRef={initialFocusRef}
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik {...other} />
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup>
                            <Button>cancel</Button>
                            <Button>submit</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>
    );
};
