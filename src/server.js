import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());


  const PORT = Number(env('PORT', 3000));

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: '',
    });
  });

  app.use('*', (req, res, next) => {
    res.status(400).json({
      message: 'Not Found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

};
