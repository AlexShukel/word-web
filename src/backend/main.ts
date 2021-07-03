import { join } from "path";

import { app, BrowserWindow, ipcMain } from "electron";

let win: BrowserWindow | null = null;
const createWindow = () => {
    win = new BrowserWindow({
        webPreferences: {
            preload: join(__dirname, "./preload.js"),
        },
    });

    win.loadURL("http://localhost:8080/");

    win.on("closed", () => {
        win = null;
    });
};

app.on("ready", () => {
    createWindow();
    ipcMain.on("test", (e) => {
        console.log(e);
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});
