import mongoose from "mongoose";
import {db_name} from '../constants.js';
const connectMongoDb=async ()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.mongodb_uri}/${db_name}`);
        console.log("Mongo Db connected !! Host Name: `${connectionInstance.connection.host}` ");
    }catch(error){
        console.log("MongoDb connection Failure: ", error);
    }
}
export default connectMongoDb;