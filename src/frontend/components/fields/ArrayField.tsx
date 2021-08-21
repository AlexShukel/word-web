import React from "react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Grid, GridItem, HStack } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/react";
import { FieldArray } from "@reactive-forms/dom";

import { StyledField } from "./StyledField";

type ArrayFieldProps<T> = {
    name: string;
    emptyValue: T;
};

export const ArrayField = <T,>({ name, emptyValue }: ArrayFieldProps<T>) => {
    return (
        <FieldArray<T> name={name}>
            {({ items, removeAt, push }) => (
                <Grid gap={2}>
                    {items.map((_, index) => (
                        <GridItem key={index}>
                            <HStack>
                                <StyledField
                                    autoFocus={index === items.length - 1}
                                    name={`${name}.${index}`}
                                />
                                <IconButton
                                    colorScheme="red"
                                    variant="outline"
                                    aria-label="Delete item"
                                    icon={<DeleteIcon />}
                                    onClick={() => {
                                        removeAt(index);
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
                                push(emptyValue);
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
