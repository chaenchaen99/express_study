import { Router } from "express";
import { home,findById,createUser } from "../controllers/UserController";
const router = Router();

//홈페이지
router.get('/', home);

//id로 조회
router.get('/:id', findById);
 
//create요청
router.post('/create', createUser);

//create요청
// router.post('/create', (req, res) => {
//     const { id,pw } = req.query;    
//     console.log(id,pw);
//     res.send('ok');
// });




export default router; //한개만