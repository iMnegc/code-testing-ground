import { app, BrowserWindow } from 'electron'
import path from 'path'
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.loadFile('./public/index.html')
}
app.whenReady().then(() => {
    createWindow()
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
})
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
