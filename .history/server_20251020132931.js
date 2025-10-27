const express = require('express');
const app = express();
const alunosRoutes = require('./src/routes/alunoRoutes');
const PORT = 3308;

app.use (express.json());
app.use('/', alunosRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


//número ideal para porta (3308)