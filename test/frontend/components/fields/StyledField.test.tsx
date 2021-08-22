import React from "react";

import {
    StyledField,
    StyledFieldProps,
} from "../../../../src/frontend/components/fields/StyledField";
import { mountForm } from "../../mountForm";

const mountStyledField = (props?: Omit<StyledFieldProps, "name">) =>
    mountForm({ test: "hello" }, <StyledField name="test" {...props} />);

describe("StyledField", () => {
    it("should render input", () => {
        const wrapper = mountStyledField();

        expect(wrapper.find("input").length).toBe(1);
    });

    it("should autofocus on ComponentDidMount", async () => {
        // const wrapper = mountStyledField({ autoFocus: true });
        // TODO test input focus on useEffect
    });
});
