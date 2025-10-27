const express = require('express');
const app = express();
const {router} = require('./src/routes/routes');
const PORT = 3308;


app.use (express.json());

router.use()



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


//número ideal para porta (3308)