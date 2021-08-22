import React from "react";
import { act } from "react-dom/test-utils";

import { ArrayField } from "../../../../src/frontend/components/fields/ArrayField";
import { mountForm } from "../../mountForm";

const mountArrayField = () =>
    mountForm({ test: ["one", "two", "three"] }, <ArrayField name="test" />);

describe("ArrayField", () => {
    it("should render fields and buttons", () => {
        const wrapper = mountArrayField();

        expect(wrapper.find("input").length).toBe(3);
        expect(wrapper.find("button").length).toBe(4);

        expect(wrapper.find("button").last().text()).toBe("ADD");
    });

    it("should add elements", async () => {
        const wrapper = mountArrayField();

        await act(async () => {
            await wrapper.find("button").last().simulate("click");
            wrapper.update();
        });

        expect(wrapper.find("input").length).toBe(4);
        expect(wrapper.find("button").length).toBe(5);
    });

    it("should remove elements", async () => {
        const wrapper = mountArrayField();

        expect(wrapper.find("input").at(1).prop("value")).toBe("two");

        await act(async () => {
            await wrapper.find("button").at(1).simulate("click");
            wrapper.update();
        });

        expect(
            wrapper
                .find("input")
                .someWhere((field) => field.prop("value") === "two")
        ).toBe(false);
    });
});
