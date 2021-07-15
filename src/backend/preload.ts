import { contextBridge, ipcRenderer } from "electron";

import { Api } from "../shared/Api";

const api: Api = {
    writeData: (data) => {
        ipcRenderer.send("writeData", data);
    },
    getData: () => {
        ipcRenderer.send("getData");
    },
};

contextBridge.exposeInMainWorld("api", api);
