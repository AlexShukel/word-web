import React from "react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Grid, GridItem, HStack } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/react";
import { FieldArray, useField } from "formik";

import { StyledField } from "./StyledField";

type ArrayFieldProps = {
    name: string;
};

export const ArrayField = <T,>({ name }: ArrayFieldProps) => {
    const [{ value }] = useField<T[]>(name);

    return (
        <FieldArray name={name}>
            {(arrayHelpers) => (
                <Grid gap={2}>
                    {value.map((_, index) => (
                        <GridItem key={index}>
                            <HStack>
                                <StyledField name={`${name}.${index}`} />
                                <IconButton
                                    colorScheme="red"
                                    variant="outline"
                                    aria-label="Delete item"
                                    icon={<DeleteIcon />}
                                    onClick={() => {
                                        arrayHelpers.remove(index);
                                    }}
                                />
                            </HStack>
                        </GridItem>
                    ))}
                    <GridItem>
                        <Button
                            colorScheme="blue"
                            leftIcon={<AddIcon />}
                            isFullWidth
                            onClick={() => {
                                arrayHelpers.push("");
                            }}
                        >
                            ADD
                        </Button>
                    </GridItem>
                </Grid>
            )}
        </FieldArray>
    );
};
