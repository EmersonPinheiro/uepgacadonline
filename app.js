const electron = require('electron')
const { app, BrowserWindow } = require('electron')

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
        width: width * 0.7,
        height: height * 0.7,
        webPreferences: {
            webSecurity: false
        }
     })

    mainWindow.loadURL(url)
})

app.on('window-all-closed', () => {
    app.quit()
})
