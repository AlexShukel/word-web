import { useContext } from "react";

import invariant from "invariant";

import { PopupsContext } from "../components/popups/PopupsContext";

export const usePopupsContext = () => {
    const context = useContext(PopupsContext);

    invariant(context, "PopupsContext was not provided");

    return context;
};
