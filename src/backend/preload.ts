import { contextBridge, ipcRenderer } from "electron";

import { Electron } from "../shared/Electron";

const electron: Electron = {
    test: () => {
        ipcRenderer.send("test");
    },
};

contextBridge.exposeInMainWorld("electron", electron);
