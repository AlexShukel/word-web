import React, { useRef } from "react";

import { ModalBody, ModalFooter } from "@chakra-ui/react";
import { Form, Formik, FormikConfig, FormikProps } from "formik";

import { ChakraPopup, ChakraPopupProps } from "./ChakraPopup";
import { PopupButtons } from "./PopupButtons";
import { FocusableElement } from "../../types/FocusableElement";
import { PopupButton } from "../../types/PopupButton";

type FormPopupProps<T> = {
    chakraPopupProps: Omit<ChakraPopupProps, "children">;
    children: (
        props: FormikProps<T>,
        ref: React.RefObject<FocusableElement | null>
    ) => React.ReactNode;
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
    const initialFocusRef = useRef<FocusableElement | null>(null);

    return (
        <ChakraPopup
            {...chakraPopup}
            initialFocusRef={initialFocusRef}
            renderMainLayout={false}
        >
            <Formik {...formikProps}>
                {(props) => (
                    <Form>
                        <ModalBody>
                            {children(props, initialFocusRef)}
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
