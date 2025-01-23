const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  writeFile: (data) => ipcRenderer.invoke("write-file", data),
  readFile: () => ipcRenderer.invoke("read-file"),
});
