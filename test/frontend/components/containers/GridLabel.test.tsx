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

    it("should pass alignItems css property from props", () => {
        const wrapper = mount(
            <GridLabel label="Test label" placement="bottom">
                Hello
            </GridLabel>
        );

        const domNode = wrapper.find("div").at(0).getDOMNode();
        expect(getComputedStyle(domNode).alignItems).toBe("flex-end");
    });

    it("label should be centered by default", () => {
        const wrapper = mount(<GridLabel label="Test label">Hello</GridLabel>);

        const domNode = wrapper.find("div").at(0).getDOMNode();
        expect(getComputedStyle(domNode).alignItems).toBe("center");
    });
});
