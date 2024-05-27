const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy para /api/... a localhost:8787
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:8787/api',
    changeOrigin: true
}));

// Proxy para /geoserver/... a localhost:8080
app.use('/geoserver', createProxyMiddleware({
    target: 'http://localhost:8080/geoserver',
    changeOrigin: true
}));

// Iniciar el servidor en el puerto 3000
const PORT = 8989;
app.listen(PORT, () => {
    console.log(`Gateway listening on port ${PORT}`);
});
