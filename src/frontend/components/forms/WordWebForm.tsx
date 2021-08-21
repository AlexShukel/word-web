import React from "react";

import { Grid } from "@chakra-ui/react";

import { GridLabel } from "../containers/GridLabel";
import { ArrayField } from "../fields/ArrayField";
import { StyledField } from "../fields/StyledField";

export const WordWebForm = () => {
    return (
        <Grid gap={5} templateColumns="1fr 3fr">
            <GridLabel label="word">
                <StyledField autoFocus name="word" />
            </GridLabel>

            <GridLabel label="definition">
                <StyledField multiline name="definition" />
            </GridLabel>

            <GridLabel label="synonyms" placement="top">
                <ArrayField name="synonyms" emptyValue="" />
            </GridLabel>

            <GridLabel label="antonyms" placement="top">
                <ArrayField name="antonyms" emptyValue="" />
            </GridLabel>

            <GridLabel label="idioms" placement="top">
                <ArrayField name="idioms" emptyValue="" />
            </GridLabel>
        </Grid>
    );
};
