import React, { useEffect, useRef } from "react";

import { Input, Textarea } from "@chakra-ui/react";
import { Field, FieldProps } from "formik";

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

    useEffect(() => {
        if (autoFocus) focusRef.current?.focus();
    }, [autoFocus]);

    return (
        <Field name={name}>
            {({ field }: FieldProps) =>
                multiline ? (
                    <Textarea
                        ref={focusRef as React.RefObject<HTMLTextAreaElement>}
                        {...field}
                    />
                ) : (
                    <Input
                        ref={focusRef as React.RefObject<HTMLInputElement>}
                        {...field}
                    />
                )
            }
        </Field>
    );
};
