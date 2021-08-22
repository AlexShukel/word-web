import React from "react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Grid, GridItem, HStack } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/react";
import { FieldArray } from "@reactive-forms/dom";

import { StyledField } from "./StyledField";

type ArrayFieldProps = {
    name: string;
};

export const ArrayField = ({ name }: ArrayFieldProps) => {
    return (
        <FieldArray<string> name={name}>
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
                                    tabIndex={-1}
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
                                push("");
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
