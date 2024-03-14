import express, { Express } from 'express';

// Create Express instance
export const app: Express = express();

// Middleware

// Routes
app.get('/', (req, res) => res.status(200).send('Hello world!'));

// Error handler
app.use((err: Error) => console.error('err = ', err.message));