import React from "react";

import { Input, Textarea } from "@chakra-ui/react";
import { Field, FieldProps } from "formik";

import { FocusableElement } from "../../types/FocusableElement";

type StyledFieldProps = {
    name: string;
    multiline?: boolean;
    initialFocusRef?: React.RefObject<FocusableElement | null>;
};

export const StyledField = ({
    name,
    multiline,
    initialFocusRef,
}: StyledFieldProps) => {
    return (
        <Field name={name}>
            {({ field }: FieldProps) =>
                multiline ? (
                    <Textarea
                        ref={
                            initialFocusRef as React.RefObject<HTMLTextAreaElement>
                        }
                        {...field}
                    />
                ) : (
                    <Input
                        ref={
                            initialFocusRef as React.RefObject<HTMLInputElement>
                        }
                        {...field}
                    />
                )
            }
        </Field>
    );
};
