import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const home = (req: Request, res: Response) => {
    res.send('ok');
};

//id로 조회
export const getUserById = async (req: Request, res: Response) => {
    const {id} = req.query;
    const user = await prisma.user.findUnique({
        where: {id: Number(id)}
    });
    res.json(user);
} 

//회원 전체 조회
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {       
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};


// export const findById = (req: Request, res: Response) => {
//     const { id } = req.params;
//     console.log(id);
//     res.send('유저정보');
// };

// export const createUser = (req: Request, res: Response) => {
//     const { id,pw } = req.body;
//     console.log(id,pw);
//     res.send('ok');
// };


