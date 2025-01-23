const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Ensure this path is correct
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false,
    },
  });

  const startUrl = app.isPackaged
    ? `file://${path.join(__dirname, "../build/index.html")}`
    : "http://localhost:3000";

  mainWindow.loadURL(startUrl);
});

ipcMain.handle("write-file", async (_, data) => {
  const filePath = path.join(__dirname, "data.json"); // Ensure this path is correct
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return "File written successfully!";
  } catch (err) {
    console.error("Error writing file:", err);
    return "Error writing file.";
  }
});

ipcMain.handle("read-file", async () => {
  const filePath = path.join(__dirname, "data.json"); // Ensure this path is correct
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      return JSON.parse(data);
    }
    return [];
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
});
