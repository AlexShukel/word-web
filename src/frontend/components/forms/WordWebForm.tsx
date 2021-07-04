import React from "react";

import { Grid } from "@chakra-ui/react";
import { Form } from "formik";

import { GridLabel } from "../containers/GridLabel";
import { ArrayField } from "../fields/ArrayField";
import { StyledField } from "../fields/StyledField";

type WordWebFormProps = {
    initialFocusRef?: React.RefObject<HTMLInputElement>;
};

export const WordWebForm = ({ initialFocusRef }: WordWebFormProps) => {
    return (
        <Form>
            <Grid gap={5} templateColumns="1fr 3fr">
                <GridLabel label="word">
                    <StyledField
                        initialFocusRef={initialFocusRef}
                        name="word"
                    />
                </GridLabel>

                <GridLabel label="definition">
                    <StyledField multiline name="definition" />
                </GridLabel>

                <GridLabel label="synonyms" placement="top">
                    <ArrayField name="synonyms" />
                </GridLabel>

                <GridLabel label="antonyms" placement="top">
                    <ArrayField name="antonyms" />
                </GridLabel>

                <GridLabel label="idioms" placement="top">
                    <ArrayField name="idioms" />
                </GridLabel>
            </Grid>
        </Form>
    );
};
