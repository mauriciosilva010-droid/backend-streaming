require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Importa rotas
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Rotas exemplo
app.get('/', (req, res) => {
  res.send('API backend streaming funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
