import React from "react";

import { mount } from "enzyme";

import { GridLabel } from "../../../../src/frontend/components/containers/GridLabel";

describe("GridLabel", () => {
    it("should render two divs", () => {
        const wrapper = mount(<GridLabel label="" />);

        expect(wrapper.find("div").length).toBe(2);
    });

    it("should render label and children", () => {
        const wrapper = mount(<GridLabel label="Test label">Hello</GridLabel>);

        expect(wrapper.find("div").at(0).text()).toBe("TEST LABEL: ");
        expect(wrapper.find("div").at(1).text()).toBe("Hello");
    });
});
