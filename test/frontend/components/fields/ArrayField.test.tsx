import React from "react";
import { act } from "react-dom/test-utils";

import ReactiveForm, {
    createPluginArray,
    FormPlugins,
} from "@reactive-forms/core";
import { domPlugin } from "@reactive-forms/dom";
import { mount } from "enzyme";

import { ArrayField } from "../../../../src/frontend/components/fields/ArrayField";

const plugins = createPluginArray(domPlugin);

const mountForm = () =>
    mount(
        <FormPlugins plugins={plugins}>
            <ReactiveForm initialValues={{ test: ["one", "two", "three"] }}>
                {() => <ArrayField name="test" />}
            </ReactiveForm>
        </FormPlugins>
    );

describe("ArrayField", () => {
    it("should render fields and buttons", () => {
        const wrapper = mountForm();

        expect(wrapper.find("input").length).toBe(3);
        expect(wrapper.find("button").length).toBe(4);

        expect(wrapper.find("button").last().text()).toBe("ADD");
    });

    it("should add elements", async () => {
        const wrapper = mountForm();

        await act(async () => {
            await wrapper.find("button").last().simulate("click");
            wrapper.update();
        });

        expect(wrapper.find("input").length).toBe(4);
        expect(wrapper.find("button").length).toBe(5);
    });

    it("should remove elements", async () => {
        const wrapper = mountForm();

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
