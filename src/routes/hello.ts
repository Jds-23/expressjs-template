import { Router, Request, Response } from 'express';

const hello = Router();

hello.get('/', async (req: Request, res: Response) => {
    try {
        res.json({ success: true, data: 'Hello!!!' });
    } catch (error) {
        res.status(500).json({ success: false, message: JSON.stringify(error) });
    }
});

export { hello };