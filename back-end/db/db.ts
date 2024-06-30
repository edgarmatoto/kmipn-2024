import mysql, { ConnectionOptions } from 'mysql2';
import {configDotenv} from "dotenv";

configDotenv()

const access: ConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

const connection = mysql.createConnection(access);

export default connection;
