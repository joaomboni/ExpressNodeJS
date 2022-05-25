import app from './src/app.js';

const port = process.env.PORT || 3000; //Porta que vai rodar

app.listen(port, () => {
    console.log(`Servido escutando em http://localhost:${port}`);
})

