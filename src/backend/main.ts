import fs from "fs";
import { join, resolve } from "path";
import util from "util";

import { app, BrowserWindow, ipcMain } from "electron";

import { AppData } from "../shared/AppData";

const readFile = util.promisify(fs.readFile);

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
    ipcMain.on("writeData", (_e, data: AppData) => {
        fs.writeFile(
            resolve(__dirname, "hello-test.json"),
            JSON.stringify(data),
            (err) => {
                if (err) console.error(err);
            }
        );
    });

    ipcMain.handle("getData", async () => {
        const result = await readFile(resolve(__dirname, "hello-test.json"));
        return JSON.parse(result.toString());
    });

    createWindow();
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
