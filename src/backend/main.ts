import fs from "fs";
import { join, resolve } from "path";
import util from "util";

import { app, BrowserWindow, ipcMain } from "electron";

import { AppData } from "../shared/AppData";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

let win: BrowserWindow | null = null;
const createWindow = () => {
    win = new BrowserWindow({
        webPreferences: {
            preload: join(__dirname, "./preload.js"),
            contextIsolation: true,
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
        const path = resolve(__dirname, "hello-test.json");
        let result: AppData = { words: [] };

        if (fs.existsSync(path)) {
            result = JSON.parse((await readFile(path)).toString());
        } else {
            await writeFile(path, JSON.stringify(result));
        }

        return result;
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
