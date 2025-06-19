// const { app, BrowserWindow } = require('electron');
// const path = require('path');

// // Start the Express server
// require('./server.js');

// // Create the browser window when Electron is ready
// app.whenReady().then(() => {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             nodeIntegration: false,
//             contextIsolation: true
//         }
//     });

//     // Load the Express app running on localhost:3000
//     win.loadURL('http://localhost:3000');

//     // Open DevTools for debugging (optional, remove in production)
//     // win.webContents.openDevTools();
// });

// // Quit when all windows are closed, except on macOS
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });

// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow();
//     }
// });


// *****************************************************************************************************************

// const { app, BrowserWindow } = require('electron');
// const { autoUpdater } = require('electron-updater');
// const path = require('path');

// // Start the Express server
// require('./server.js');

// // Create the browser window
// app.whenReady().then(() => {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             nodeIntegration: false,
//             contextIsolation: true
//         }
//     });

//     // Load the Express app
//     win.loadURL('http://localhost:3000');

//     // Check for updates
//     autoUpdater.checkForUpdatesAndNotify();
// });

// // Auto-updater events
// autoUpdater.on('update-available', () => {
//     console.log('Mise à jour disponible.');
// });
// autoUpdater.on('update-downloaded', () => {
//     console.log('Mise à jour téléchargée. Redémarrage...');
//     autoUpdater.quitAndInstall();
// });
// autoUpdater.on('error', (err) => {
//     console.error('Erreur de mise à jour :', err);
// });

// // Quit when all windows are closed, except on macOS
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });

// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow();
//     }
// });

// ***************************************************************************************************************************

const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

// Start the Express server
require('./server.js');

// Create the browser window
app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // Load the Express app
    win.loadURL('http://localhost:3000');

    // Check for updates after the window loads
    autoUpdater.checkForUpdatesAndNotify();

    // Open DevTools for debugging (optional, remove in production)
    // win.webContents.openDevTools();
});

// Auto-updater events
autoUpdater.on('update-available', () => {
    console.log('Une mise à jour est disponible.');
});
autoUpdater.on('update-downloaded', () => {
    console.log('Mise à jour téléchargée. Redémarrage...');
    autoUpdater.quitAndInstall();
});
autoUpdater.on('error', (err) => {
    console.error('Erreur lors de la mise à jour :', err.message);
});
autoUpdater.on('checking-for-update', () => {
    console.log('Vérification des mises à jour...');
});
autoUpdater.on('update-not-available', () => {
    console.log('Aucune mise à jour disponible.');
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});