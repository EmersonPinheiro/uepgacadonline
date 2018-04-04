const electron = require('electron')
const { app, BrowserWindow, ipcMain } = require('electron')

const url_ = require('url');
const path = require('path');

const server = require('./src/server')

app.on('ready', () => {

    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize

    const url = process.env.URL || url_.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    let mainWindow = new BrowserWindow({ 
        width: width * 0.8,
        height: height * 0.7,
        webPreferences: {
            webSecurity: false
        }
    })

    mainWindow.loadURL(url)
})

let about = null
ipcMain.on('open-about', () => {
    if(about == null) {
        about = new BrowserWindow({
            width: 300,
            height: 250,
            alwaysOnTop: true
        })
    }

    about.on('close-about', () => {
        about = null
    })

    sobreWindow.loadURL('https://uepg.br');
})

app.on('window-all-closed', () => {
    app.quit()
})
