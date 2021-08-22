import React, { useEffect } from "react";

import { FocusableElement } from "../types/FocusableElement";

export const useAutoFocus = (
    inputRef: React.MutableRefObject<FocusableElement | null>,
    autoFocus?: boolean
) => {
    useEffect(() => {
        if (autoFocus && inputRef.current) inputRef.current.focus();
    }, [autoFocus, inputRef]);
};
