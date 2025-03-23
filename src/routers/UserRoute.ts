import { Router } from "express";
import { home,getAllUsers, getUserById } from "../controllers/UserController";
// import { home,findById,createUser } from "../controllers/UserController";
const router = Router();

//홈페이지
router.get('/', home);

//회원 전체 조회
router.get('/users', getAllUsers);

//id로 조회
router.get('/getUserById', getUserById);

// //id로 조회
// router.get('/:id', findById);
 
// //create요청
// router.post('/create', createUser);

//create요청
// router.post('/create', (req, res) => {
//     const { id,pw } = req.query;    
//     console.log(id,pw);
//     res.send('ok');
// });




export default router; //한개만