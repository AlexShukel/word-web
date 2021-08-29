import { useCallback } from "react";

import { usePopupsContext } from "./usePopupsContext";
import { PopupConfig } from "../types/PopupConfig";

export const usePopup = (popup: PopupConfig) => {
    const {
        setPopup,
        disclosure: { onClose, onOpen },
    } = usePopupsContext();

    const open = useCallback(() => {
        setPopup(popup);
        onOpen();
    }, [popup, setPopup, onOpen]);

    const close = useCallback(() => {
        setPopup(null);
        onClose();
    }, [setPopup, onClose]);

    return {
        open,
        close,
    };
};
