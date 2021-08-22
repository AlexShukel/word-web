import React from "react";

import { renderHook } from "@testing-library/react-hooks";

import { useAutoFocus } from "../../../src/frontend/hooks/useAutoFocus";
import { FocusableElement } from "../../../src/frontend/types/FocusableElement";

describe("useAutoFocus", () => {
    it("should auto focus in useEffect", () => {
        const focus = jest.fn();

        const ref = { current: { focus } };

        renderHook(() =>
            useAutoFocus(
                ref as unknown as React.MutableRefObject<FocusableElement | null>,
                true
            )
        );

        expect(focus).toBeCalledTimes(1);
    });
});
