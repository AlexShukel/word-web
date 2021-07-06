import { createContext, useContext } from "react";

import { UseDisclosureReturn } from "@chakra-ui/react";
import invariant from "invariant";

export const ChakraPopupContext = createContext<
    UseDisclosureReturn | undefined
>(undefined);

export const useChakraPopupContext = () => {
    const context = useContext(ChakraPopupContext);

    invariant(
        context,
        "You sholdn't use ChakraPopupContext ouside a ChakraPopup"
    );

    return context;
};
