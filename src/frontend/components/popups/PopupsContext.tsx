import React, { createContext, useState } from "react";

import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

import { PopupConfig } from "../../types/PopupConfig";

type PopupsContextType = {
    setPopup: (popup: PopupConfig | null) => void;
    popup: PopupConfig | null;
    disclosure: UseDisclosureReturn;
};

export const PopupsContext = createContext<PopupsContextType | null>(null);

export const PopupsController = ({ children }: React.PropsWithChildren<{}>) => {
    const [popup, setPopup] = useState<PopupConfig | null>(null);

    const disclosure = useDisclosure();

    return (
        <PopupsContext.Provider value={{ setPopup, popup, disclosure }}>
            {children}
        </PopupsContext.Provider>
    );
};
