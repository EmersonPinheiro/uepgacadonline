const uepgwrapper = require('./uepgwrapper')

uepgwrapper.getHeaders((headers, callback) => {
    uepgwrapper.getAuth(headers, (headers, callback) => {
        uepgwrapper.getDocs(headers, (body) => {
            console.log(body)
        })
    })
})

/*

const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    })

    //mainWindow.loadURL('https://sistemas.uepg.br/academicoonline/login/index')
    mainWindow.loadURL('file://src/index.html')
})

app.on('window-all-closed', () => {
    app.quit()
})

*/