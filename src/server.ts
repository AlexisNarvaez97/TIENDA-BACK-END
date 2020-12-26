import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { createServer } from 'http';
import environments from './config/environments';
// Configuración de las variables de entorno (lectura)

if (process.env.NODE_ENV !== 'production') {
    const env = environments;
    console.log(env);
}

async function init() {
  const app = express();

  app.use(cors());

  app.use(compression());

  app.get('/', (_, res) => {
    res.send('API MEAN - ONLINE SHOP');
  });

  const httpServer = createServer(app);

  const PORT = process.env.PORT || 2002;

  httpServer.listen(
    {
      port: PORT,
    },
    () => console.log(`http://localhost:${PORT} API MEAN - ONLINE SHOP`)
  );
}

init();