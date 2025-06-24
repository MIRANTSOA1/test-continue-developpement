const { ipcRenderer } = require('electron');

const messageEl = document.getElementById('message');
const progressBarContainer = document.getElementById('progress-bar-container');
const progressBar = document.getElementById('progress-bar');
const updateBtn = document.getElementById('update-btn');
const restartBtn = document.getElementById('restart-btn');
const laterBtn = document.getElementById('later-btn');

// --- Écoute des messages du processus principal ---

ipcRenderer.on('update-message', (event, text) => {
    messageEl.innerText = text;
});

ipcRenderer.on('update-available', (event, info) => {
    messageEl.innerText = `Une nouvelle version (${info.version}) est disponible.`;
    updateBtn.classList.remove('hidden');
    laterBtn.classList.remove('hidden');
});

ipcRenderer.on('update-not-available', () => {
    messageEl.innerText = 'Votre application est à jour.';
    // On ferme la fenêtre de mise à jour et on lance l'app principale après un court délai
    setTimeout(() => {
        ipcRenderer.send('start-main-app');
    }, 2000);
});

ipcRenderer.on('download-progress', (event, progressObj) => {
    const percent = Math.floor(progressObj.percent);
    messageEl.innerText = `Téléchargement en cours... ${percent}%`;
    progressBarContainer.classList.remove('hidden');
    progressBar.style.width = `${percent}%`;
    progressBar.innerText = `${percent}%`;
    updateBtn.classList.add('hidden');
    laterBtn.classList.add('hidden');
});

ipcRenderer.on('update-downloaded', () => {
    messageEl.innerText = 'Mise à jour téléchargée. Prête à être installée.';
    progressBarContainer.classList.add('hidden');
    restartBtn.classList.remove('hidden');
    laterBtn.classList.remove('hidden');
});

// --- Envoi des actions de l'utilisateur au processus principal ---

updateBtn.addEventListener('click', () => {
    ipcRenderer.send('download-update');
});

restartBtn.addEventListener('click', () => {
    ipcRenderer.send('install-update');
});

laterBtn.addEventListener('click', () => {
    // L'utilisateur a cliqué sur "Plus tard", on lance l'application principale
    ipcRenderer.send('start-main-app');
});