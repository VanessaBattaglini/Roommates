import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import roomRouter from './routes/roomRouter.js';

//Middlewares
app.use('/', roomRouter);



app.listen(PORT, () => {
console.log(`El servidor se ha levantado en el PORT http://localhost:${PORT}`)
});