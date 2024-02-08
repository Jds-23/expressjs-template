// router.ts
import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { addTwoDigits } from '../functions';

const querySchema = z.object({
    num1: z.string().regex(/^\d{2}$/, { message: "num1 must be a two-digit number" }),
    num2: z.string().regex(/^\d{2}$/, { message: "num2 must be a two-digit number" })
});

export function createAddNumbersRouter() {
    const router = Router();

    router.get('/add', async (req: Request, res: Response) => {
        try {
            const validatedQuery = querySchema.parse(req.query);
            const num1 = parseInt(validatedQuery.num1, 10);
            const num2 = parseInt(validatedQuery.num2, 10);
            const sum = addTwoDigits(num1, num2);
            res.json({ success: true, data: { sum } });
        } catch (error) {
            res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'Validation failed' });
        }
    });

    return router;
}
