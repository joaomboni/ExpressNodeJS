import express from 'express';
import db from './config/dbconnect.js';
import routes from './routs/index.js';

db.on("erro", console.log.bind(console, 'Erro de Conexão'));
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
})

const app = express();

app.use(express.json());

routes(app);

export default app;