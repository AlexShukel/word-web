import React from "react";

import ReactiveForm, {
    createPluginArray,
    FormPlugins,
} from "@reactive-forms/core";
import { domPlugin } from "@reactive-forms/dom";
import { mount } from "enzyme";

const plugins = createPluginArray(domPlugin);

export const mountForm = <T extends object>(
    initialValues: T,
    children: React.ReactNode
) =>
    mount(
        <FormPlugins plugins={plugins}>
            <ReactiveForm initialValues={initialValues}>
                {() => children}
            </ReactiveForm>
        </FormPlugins>
    );
