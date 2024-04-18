import axios from 'axios';
import fs from 'fs';
import { v4 as uuidv4 } from "uuid";

const urlApi = "https://randomuser.me/api";

const addRoommateQuery = async (req, res) => {
    try {
        const data = await axios(urlApi);
        const userData = data.data.results[0]
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
};



export {
    addRoommateQuery
}