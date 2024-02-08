import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger/winston';

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
    const { method, path } = req;
    logger.info(`Received ${method} request to ${path}`);
    next();
}
