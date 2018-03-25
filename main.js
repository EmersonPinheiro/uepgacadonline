const uepgwrapper = require('./src/uepgwrapper')

const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    
    mainWindow.loadURL(`file://${__dirname}/src/login.html`)
})

app.on('window-all-closed', () => {
    app.quit()
})
