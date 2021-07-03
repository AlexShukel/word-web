import React from "react";

import { WordsContextLoader } from "./WordsContext";

export const App = () => {
    return (
        <WordsContextLoader>
            <div>hello</div>
            <button onClick={() => window.electron.test()}>test ipcMain</button>
        </WordsContextLoader>
    );
};
