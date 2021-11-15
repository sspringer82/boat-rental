import express from 'express';
import boatRouter from './boat';

const port = 8080;
const app = express();

app.use(express.json());

app.use('/boats', boatRouter);

app.listen(port, () => console.log(`Listening to http://localhost:${port}`));
