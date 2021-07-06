import React from "react";

import { ModalBody, ModalFooter } from "@chakra-ui/react";
import { Form, Formik, FormikConfig } from "formik";

import { ChakraPopup, ChakraPopupProps } from "./ChakraPopup";
import { PopupButtons } from "./PopupButtons";
import { PopupButton } from "../../types/PopupButton";

type FormPopupProps<T> = {
    chakraPopupProps: Omit<ChakraPopupProps, "children">;
} & FormikConfig<T>;

const defaultFormPopupButtons: PopupButton[] = [
    {
        title: "CANCEL",
        onClick: (e) => {
            console.log(e);
        },
        closeOnClick: true,
    },
    { title: "SUBMIT", type: "submit", closeOnClick: true },
];

export const FormPopup = <T,>({
    chakraPopupProps: { buttons = defaultFormPopupButtons, ...chakraPopup },
    children,
    ...formikProps
}: FormPopupProps<T>) => {
    return (
        <ChakraPopup {...chakraPopup} renderMainLayout={false}>
            <Formik {...formikProps}>
                {(props) => (
                    <Form>
                        <ModalBody>
                            {typeof children === "function"
                                ? children(props)
                                : children}
                        </ModalBody>
                        <ModalFooter>
                            <PopupButtons buttons={buttons} />
                        </ModalFooter>
                    </Form>
                )}
            </Formik>
        </ChakraPopup>
    );
};
