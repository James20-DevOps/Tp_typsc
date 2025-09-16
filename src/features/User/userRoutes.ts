import  express  from "express";
import { createUser, findUserByEmail } from "./userController";

const router = express.Router()

router.post('/', createUser);
router.get('/:email', findUserByEmail)

export default router;