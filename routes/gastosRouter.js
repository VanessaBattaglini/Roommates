import express from "express";
const router = express.Router();
import { getGastos } from "../controllers/gastosController.js";

router.get('/gastos', getGastos);




export default router;
