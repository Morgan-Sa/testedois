import express from 'express';
import routes from './routers/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log('App is running in http://localhost:8080');
});
