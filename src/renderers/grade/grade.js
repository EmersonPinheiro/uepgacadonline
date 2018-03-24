const { ipcRenderer } = require('electron')
const uepgWrapper = require('../../uepgwrapper')

let $ = document.querySelector.bind(document)
let test = $('.test')
 
uepgWrapper.getHeaders((headers, callback) => {
    uepgWrapper.getAuth(headers, (headers, callback) => {
        uepgWrapper.getGrade(headers, (body) => {
            test.innerHTML = uepgWrapper.parseGrade(body)
        })
    })
})
