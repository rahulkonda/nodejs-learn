import express from 'express';
import router from './routes'

const app = express();
const port = 8000;
app.use(express.json());
app.use('/api', router);
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});