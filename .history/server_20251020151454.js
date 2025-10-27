const express = require('express');
const app = express();
const {router} = require('./src/routes/routes');
const PORT = ;


app.use(express.json());

app.use('/', router);



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


//número ideal para porta (3308)