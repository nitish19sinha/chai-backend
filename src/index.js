import dotenv from "dotenv";
dotenv.config({path: './env'});
import connectMongoDb from './db/db.js';
connectMongoDb();