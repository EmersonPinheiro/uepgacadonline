const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    })

    mainWindow.loadURL('https://sistemas.uepg.br/academicoonline/login/index')
})

app.on('window-all-closed', () => {
    app.quit()
})