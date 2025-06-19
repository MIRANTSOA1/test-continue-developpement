// const express = require('express');
// const app = express();
// const path = require('path');

// // Serve static files from the 'public' folder
// app.use(express.static(path.join(__dirname, 'public')));

// // Explicitly serve index.html for the root route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Handle 404 errors
// app.use((req, res) => {
//     res.status(404).send('Page non trouvée');
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Le serveur fonctionne sur http://localhost:${PORT}`);
// });

// *****************************************************************************************************************

// const express = require('express');
// const app = express();
// const path = require('path');
// const fs = require('fs');

// // Determine the path to the external data folder
// const appPath = process.env.PORTABLE_EXECUTABLE_DIR || __dirname;
// const externalPublicPath = path.join(appPath, 'data');

// // Log for debugging
// console.log('Chemin du dossier data :', externalPublicPath);
// try {
//     console.log('Contenu du dossier data :', fs.readdirSync(externalPublicPath));
// } catch (err) {
//     console.error('Erreur lors de la lecture du dossier data :', err);
// }

// Serve static files from the external 'data' folder if it exists, otherwise fallback to bundled 'public'
// if (fs.existsSync(externalPublicPath)) {
//     app.use(express.static(externalPublicPath));
// } else {
//     app.use(express.static(path.join(__dirname, 'public')));
// }

// // Explicitly serve index.html for the root route
// app.get('/', (req, res) => {
//     const indexPath = fs.existsSync(externalPublicPath)
//         ? path.join(externalPublicPath, 'index.html')
//         : path.join(__dirname, 'public', 'index.html');
//     res.sendFile(indexPath);
// });

// // Handle 404 errors
// app.use((req, res) => {
//     res.status(404).send('Page non trouvée');
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Le serveur fonctionne sur http://localhost:${PORT}`);
// });


// ***************************************************************************************************

// const express = require('express');
// const app = express();
// const path = require('path');
// const fs = require('fs');

// // Determine the path to the external data folder
// const appPath = process.env.PORTABLE_EXECUTABLE_DIR || __dirname;
// const externalPublicPath = path.join(appPath, 'data');

// // Log for debugging
// console.log('Chemin du dossier data :', externalPublicPath);
// try {
//     console.log('Contenu du dossier data :', fs.readdirSync(externalPublicPath));
// } catch (err) {
//     console.error('Erreur lors de la lecture du dossier data :', err);
// }

// // Serve static files from the external 'data' folder if it exists, otherwise fallback to bundled 'public'
// if (fs.existsSync(externalPublicPath)) {
//     app.use(express.static(externalPublicPath));
// } else {
//     app.use(express.static(path.join(__dirname, 'public')));
// }

// // Explicitly serve index.html for the root route
// app.get('/', (req, res) => {
//     const indexPath = fs.existsSync(externalPublicPath)
//         ? path.join(externalPublicPath, 'index.html')
//         : path.join(__dirname, 'public', 'index.html');
//     res.sendFile(indexPath);
// });

// // Handle 404 errors
// app.use((req, res) => {
//     res.status(404).send('Page non trouvée');
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Le serveur fonctionne sur http://localhost:${PORT}`);
// });


// ***************************************************************************************************
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Log for debugging
const publicPath = path.join(__dirname, 'public');
console.log('Chemin du dossier public :', publicPath);
try {
    console.log('Contenu du dossier public :', fs.readdirSync(publicPath));
} catch (err) {
    console.error('Erreur lors de la lecture du dossier public :', err);
}

// Serve static files from the 'public' folder
app.use(express.static(publicPath));

// Explicitly serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Page non trouvée');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur http://localhost:${PORT}`);
});