import express from "express";
const router = express.Router();
import { getGastos, addGastos, deleteGastos } from "../controllers/gastosController.js";

router.get('/gastos', getGastos);

router.post('/gasto', addGastos);

router.delete('/gasto', deleteGastos);



export default router;
