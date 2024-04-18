import express from "express";
const router = express.Router();
import { getGastos, addGastos } from "../controllers/gastosController.js";

router.get('/gastos', getGastos);

router.post('/gasto', addGastos);



export default router;
