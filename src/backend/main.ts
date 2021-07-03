import { app, BrowserWindow } from "electron";

let win: BrowserWindow | null = null;
const createWindow = () => {
    win = new BrowserWindow({});

    win.loadURL("http://localhost:8080/");

    win.on("closed", () => {
        win = null;
    });
};

app.on("ready", createWindow);

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
