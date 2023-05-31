import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import PostRoutes from './routes/PostRoutes.js';
import DalleRoutes from './routes/DalleRoutes.js';
dotenv.config();
import connectDB from "./mongodb/connect.js";

const app = express();
app.use(cors());

app.use(express.json({limit: '50mb'}));


app.use('/api/v1/post',PostRoutes);
app.use('/api/v1/dalle',DalleRoutes);
app.get('/',async (req,res)=>
{
    res.send('Hello from DALLE-2.0');
});


const startServer =  () =>
{
    try
    {
        connectDB(process.env.MONGODB_URL);
        app.listen('8080',()=>console.log('Server running on port http://localhost:8080/'))
    }
    catch (error)
    {
        console.log(error);
    }
}

startServer();