const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir a página HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
