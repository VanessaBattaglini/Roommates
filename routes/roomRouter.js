import express from 'express';
const router = express.Router();
import { home, addRoommate } from '../controllers/roomController.js';

//Prueba conexion
router.get("/", home);

router.get('/roommate', addRoommate);






export default router;