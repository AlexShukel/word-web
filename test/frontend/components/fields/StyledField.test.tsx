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
        expect(wrapper.find("input").prop("value")).toBe("hello");
    });

    it("should render textarea", () => {
        const wrapper = mountStyledField({ multiline: true });

        expect(wrapper.find("textarea").length).toBe(1);
        expect(wrapper.find("textarea").prop("value")).toBe("hello");
    });
});
