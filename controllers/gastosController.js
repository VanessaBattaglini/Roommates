import { getGastosQuery, addGastosQuery } from "../queries/gastos.js";

const getGastos = async (req, res) => {
  try {
    const results = await getGastosQuery();
    res.json(results);
  } catch (error) {
    console.log(error.message);
  }
};
const addGastos = async (req, res) => {
  try {
    const gasto = req.body;
    console.log(req.body)
    const results = await addGastosQuery(gasto);
    res.send('agregando gastos')
  } catch (error) {
    console.log(error.message)
  }
}

export {
  getGastos,
  addGastos
}