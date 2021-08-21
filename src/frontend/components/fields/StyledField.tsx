import React, { useEffect, useRef } from "react";

import { Input, Textarea, TextareaProps } from "@chakra-ui/react";
import { useTextField } from "@reactive-forms/dom";

import { FocusableElement } from "../../types/FocusableElement";

type StyledFieldProps = {
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

    useEffect(() => {
        if (autoFocus) focusRef.current?.focus();
    }, [autoFocus]);

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
