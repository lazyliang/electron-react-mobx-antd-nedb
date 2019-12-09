const main = require('electron');
const app = main.app;
const {BrowserWindow }= require('electron');

const path = require('path');

const isDev = require('electron-is-dev');
var Datastore = require('nedb')
    , db = new Datastore({ filename:
        path.join(__dirname,'public/datafile') });
console.log(__dirname)
db.loadDatabase(function (err) {
    // Callback is optional
    // Now commands will be executed
});
global.collDb = db

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680,
      webPreferences:{
          javascript: true,
          plugins: true,
          nodeIntegration: true, // 不集成 Nodejs
          webSecurity: false,

      }}
      );

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file:///${path.join(__dirname, './build/index.html')}`);
    mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => mainWindow = null);

    mainWindow.show()
}

app.on('ready', createWindow);



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

