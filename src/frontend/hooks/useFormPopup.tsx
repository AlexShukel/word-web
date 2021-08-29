import React from "react";

import ReactiveForm, { FormConfig } from "@reactive-forms/core";
import { Form } from "@reactive-forms/dom";

import { usePopup } from "./usePopup";
import { PopupButton } from "../types/PopupButton";
import { PopupConfig } from "../types/PopupConfig";

const defaultFormPopupButtons: PopupButton[] = [
    { title: "SUBMIT", type: "submit", closeOnClick: true },

    {
        title: "CANCEL",
        onClick: () => {
            // Do nothing
        },
        closeOnClick: true,
    },
];

type FormPopupConfig<T extends object> = Omit<PopupConfig, "BodyWrapper"> &
    FormConfig<T>;

export const useFormPopup = <T extends object>(config: FormPopupConfig<T>) => {
    const FormWrapper = ({ children }: React.PropsWithChildren<{}>) => (
        <ReactiveForm {...config}>{() => <Form>{children}</Form>}</ReactiveForm>
    );

    return usePopup({
        ...config,
        buttons: config.buttons ?? defaultFormPopupButtons,
        BodyWrapper: FormWrapper,
    });
};
