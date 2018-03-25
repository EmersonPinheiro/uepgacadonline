const uepgwrapper = require('./src/uepgwrapper')

const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 8   00
    })

    //mainWindow.loadURL('https://sistemas.uepg.br/academicoonline/login/index')
    mainWindow.loadURL(`file://${__dirname}/src/login.html`)
    //mainWindow.loadURL('https://dontfile.herokuapp.com')
})

app.on('window-all-closed', () => {
    app.quit()
})
