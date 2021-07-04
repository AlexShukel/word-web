import React from "react";

import { Input, Textarea } from "@chakra-ui/react";
import { Field, FieldProps } from "formik";

type StyledFieldProps = {
    name: string;
    multiline?: boolean;
    initialFocusRef?: React.RefObject<HTMLInputElement>;
};

export const StyledField = ({
    name,
    multiline,
    initialFocusRef,
}: StyledFieldProps) => {
    console.log(initialFocusRef);

    return (
        <Field name={name}>
            {({ field }: FieldProps) =>
                multiline ? (
                    <Textarea
                        ref={
                            initialFocusRef as unknown as React.RefObject<HTMLTextAreaElement>
                        }
                        {...field}
                    />
                ) : (
                    <Input ref={initialFocusRef} {...field} />
                )
            }
        </Field>
    );
};
