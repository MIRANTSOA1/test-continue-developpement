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

//     // Check for updates after the window loads
//     autoUpdater.checkForUpdatesAndNotify();

//     // Open DevTools for debugging (optional, remove in production)
//     // win.webContents.openDevTools();
// });

// // Auto-updater events
// autoUpdater.on('update-available', () => {
//     console.log('Une mise à jour est disponible.');
// });
// autoUpdater.on('update-downloaded', () => {
//     console.log('Mise à jour téléchargée. Redémarrage...');
//     autoUpdater.quitAndInstall();
// });
// autoUpdater.on('error', (err) => {
//     console.error('Erreur lors de la mise à jour :', err.message);
// });
// autoUpdater.on('checking-for-update', () => {
//     console.log('Vérification des mises à jour...');
// });
// autoUpdater.on('update-not-available', () => {
//     console.log('Aucune mise à jour disponible.');
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


// **************************************************************************************************************

// // Importez `dialog` pour afficher des boîtes de dialogue
// const { app, BrowserWindow, dialog } = require('electron');
// const { autoUpdater } = require('electron-updater');
// const path = require('path');

// // Start the Express server
// require('./server.js');

// // --- Configuration de l'auto-updater ---

// // ÉTAPE CLÉ : Désactiver le téléchargement automatique.
// // Nous voulons demander à l'utilisateur AVANT de télécharger.
// autoUpdater.autoDownload = false;

// // Activez le logging pour le débogage (très utile !)
// autoUpdater.logger = require('electron-log');
// autoUpdater.logger.transports.file.level = 'info';


// // --- Logique de l'application ---

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

//     // On lance la vérification des mises à jour après le démarrage
//     autoUpdater.checkForUpdates();
// });

// // --- Gestion des événements de mise à jour ---

// // Événement 1 : Une mise à jour est disponible
// autoUpdater.on('update-available', async (info) => {
//     console.log('Mise à jour disponible :', info);
    
//     // On affiche une boîte de dialogue pour demander à l'utilisateur
//     const { response } = await dialog.showMessageBox({
//         type: 'info',
//         title: 'Mise à jour disponible',
//         message: `Une nouvelle version (${info.version}) est disponible. Voulez-vous la télécharger maintenant ?`,
//         buttons: ['Oui, télécharger', 'Non, plus tard']
//     });

//     // Si l'utilisateur clique sur "Oui, télécharger" (bouton d'index 0)
//     if (response === 0) {
//         // On lance le téléchargement manuellement
//         autoUpdater.downloadUpdate();
//     }
// });

// // Événement 2 : La mise à jour a été téléchargée
// autoUpdater.on('update-downloaded', async (info) => {
//     console.log('Mise à jour téléchargée :', info);

//     // On affiche une nouvelle boîte de dialogue pour demander l'installation
//     const { response } = await dialog.showMessageBox({
//         type: 'info',
//         title: 'Prêt à installer',
//         message: 'La mise à jour a été téléchargée. Voulez-vous redémarrer l\'application pour l\'installer maintenant ?',
//         buttons: ['Oui, redémarrer', 'Non, à la prochaine fermeture']
//     });

//     // Si l'utilisateur clique sur "Oui, redémarrer"
//     if (response === 0) {
//         autoUpdater.quitAndInstall();
//     }
// });

// // Événements pour le logging (gardez-les, ils sont très utiles)
// autoUpdater.on('error', (err) => {
//     console.error('Erreur lors de la mise à jour :', err.message);
// });
// autoUpdater.on('checking-for-update', () => {
//     console.log('Vérification des mises à jour...');
// });
// autoUpdater.on('update-not-available', () => {
//     console.log('Aucune mise à jour disponible.');
// });
// autoUpdater.on('download-progress', (progressObj) => {
//     let log_message = "Vitesse de téléchargement : " + progressObj.bytesPerSecond;
//     log_message = log_message + ' - Téléchargé ' + progressObj.percent + '%';
//     log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
//     console.log(log_message);
// });

// // --- Gestion standard des fenêtres Electron ---

// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });

// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         // Assurez-vous d'avoir une fonction pour recréer la fenêtre ou mettez le code ici
//     }
// });


// *******************************************************************************************************************************************************


const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

// Gardons des références globales aux fenêtres pour éviter qu'elles soient garbage-collectées
let updateWindow;
let mainWindow;

// --- Démarrage de l'application ---

app.on('ready', () => {
    createUpdateWindow();
    
    // Une fois la fenêtre de mise à jour prête, on vérifie
    updateWindow.webContents.on('did-finish-load', () => {
        autoUpdater.checkForUpdates();
    });
});


// --- Création des fenêtres ---

function createUpdateWindow() {
    updateWindow = new BrowserWindow({
        width: 400,
        height: 250,
        frame: false, // Fenêtre sans bordure
        resizable: false,
        webPreferences: {
            nodeIntegration: true, // Nécessaire pour le require() dans update-renderer.js
            contextIsolation: false // Simplifie l'IPC pour cet exemple
        }
    });
    updateWindow.loadFile(path.join(__dirname, 'update.html'));
    updateWindow.on('closed', () => {
        updateWindow = null;
    });
}

function createMainWindow() {
    // Si la fenêtre de mise à jour existe encore, on la ferme
    if (updateWindow) {
        updateWindow.close();
    }
    
    // Démarrage du serveur Express
    require('./server.js');
    
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // Vos webPreferences pour la fenêtre principale
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    
    // Charger l'application Express
    mainWindow.loadURL('http://localhost:3000');
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}


// --- Écoute des événements de l'auto-updater ---
// Ces événements envoient des messages à la fenêtre de mise à jour.

autoUpdater.on('checking-for-update', () => {
    updateWindow.webContents.send('update-message', 'Vérification en cours...');
});

autoUpdater.on('update-available', (info) => {
    updateWindow.webContents.send('update-available', info);
});

autoUpdater.on('update-not-available', (info) => {
    updateWindow.webContents.send('update-not-available');
});

autoUpdater.on('error', (err) => {
    updateWindow.webContents.send('update-message', `Erreur de mise à jour : ${err.message}`);
});

autoUpdater.on('download-progress', (progressObj) => {
    updateWindow.webContents.send('download-progress', progressObj);
});

autoUpdater.on('update-downloaded', (info) => {
    updateWindow.webContents.send('update-downloaded');
});


// --- Écoute des messages de la fenêtre de mise à jour (ipcMain) ---

// L'utilisateur veut télécharger
ipcMain.on('download-update', () => {
    autoUpdater.downloadUpdate();
});

// L'utilisateur veut redémarrer et installer
ipcMain.on('install-update', () => {
    autoUpdater.quitAndInstall();
});

// L'utilisateur veut lancer l'app (pas de MAJ ou a cliqué "Plus tard")
ipcMain.on('start-main-app', () => {
    createMainWindow();
});

// --- Gestion standard de la fermeture ---
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});