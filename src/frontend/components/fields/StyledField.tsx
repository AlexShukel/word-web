import React, { useEffect, useRef } from "react";

import { Input, Textarea, TextareaProps } from "@chakra-ui/react";
import { useTextField } from "@reactive-forms/dom";

import { useAutoFocus } from "../../hooks/useAutoFocus";
import { FocusableElement } from "../../types/FocusableElement";

export type StyledFieldProps = {
    name: string;
    multiline?: boolean;
    autoFocus?: boolean;
};

export const StyledField = ({
    name,
    multiline,
    autoFocus,
}: StyledFieldProps) => {
    const focusRef = useRef<FocusableElement | null>(null);

    const field = useTextField({ name });

    useAutoFocus(focusRef, autoFocus);

    return multiline ? (
        <Textarea
            ref={focusRef as React.RefObject<HTMLTextAreaElement>}
            // FIXME fix types
            {...(field as unknown as TextareaProps)}
        />
    ) : (
        <Input ref={focusRef as React.RefObject<HTMLInputElement>} {...field} />
    );
};
