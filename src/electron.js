const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname + '/../dist');

function createWindow() {
  // Erstelle das Browser-Fenster.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // und lade die index.html der App.
  win.loadFile(__dirname + '/../dist/index.html');
}

app.on("ready", createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
