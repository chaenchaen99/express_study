import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.send('ok');
};

export const findById = (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id);
    res.send('유저정보');
};

export const createUser = (req: Request, res: Response) => {
    const { id,pw } = req.body;
    console.log(id,pw);
    res.send('ok');
};



