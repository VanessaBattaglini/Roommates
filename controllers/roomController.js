import path from "path";
const __dirname = import.meta.dirname;
import { addRoommateQuery } from "../queries/roommates.js";


const home = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

const addRoommate = async (req, res) => {
    try {
        const result = await addRoommateQuery();
        res.json(result);
    } catch (error) {
        console.log(error.message)
    }
    
}


export {
    home,
    addRoommate
}