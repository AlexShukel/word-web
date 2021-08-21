import React from "react";

import { ModalBody, ModalFooter } from "@chakra-ui/react";
import ReactiveForm, { FormConfig } from "@reactive-forms/core";
import { Form } from "@reactive-forms/dom";

import { ChakraPopup, ChakraPopupProps } from "./ChakraPopup";
import { PopupButtons } from "./PopupButtons";
import { PopupButton } from "../../types/PopupButton";

type FormPopupProps<T extends object> = React.PropsWithChildren<
    {
        chakraPopupProps: Omit<ChakraPopupProps, "children">;
    } & FormConfig<T>
>;

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

export const FormPopup = <T extends object>({
    chakraPopupProps: { buttons = defaultFormPopupButtons, ...chakraPopup },
    children,
    ...formProps
}: FormPopupProps<T>) => {
    return (
        <ChakraPopup {...chakraPopup} renderMainLayout={false}>
            <ReactiveForm {...formProps}>
                {() => (
                    <Form>
                        <ModalBody>
                            {typeof children === "function"
                                ? children()
                                : children}
                        </ModalBody>
                        <ModalFooter>
                            <PopupButtons buttons={buttons} />
                        </ModalFooter>
                    </Form>
                )}
            </ReactiveForm>
        </ChakraPopup>
    );
};
