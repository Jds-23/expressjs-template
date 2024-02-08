import express from 'express';
import { createAddNumbersRouter, hello } from './routes/'; // joydeep: find a better way to import
import logger from './utils/logger/winston';
import { requestLogger } from './middleware';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(express.json());

// Use the router
app.use('/api', createAddNumbersRouter()); // joydeep: find a better way to make this use
app.use('/api', hello);

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
