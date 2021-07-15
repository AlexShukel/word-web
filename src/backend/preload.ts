import { contextBridge, ipcRenderer } from "electron";

import { Api } from "../shared/Api";

const api: Api = {
    writeData: (data) => {
        ipcRenderer.send("writeData", data);
    },
    getData: () => {
        return ipcRenderer.invoke("getData");
    },
};

contextBridge.exposeInMainWorld("api", api);
