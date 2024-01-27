
import express from 'express';
import { oscars } from './routes/apiOscars.js'

const app = express();

//middlewares 

app.use(express.json());

const port = 4000;

app.use('/api/oscars', oscars);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});