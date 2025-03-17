import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('api is running');
});

export default router;