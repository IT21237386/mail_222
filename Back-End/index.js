import express from "express";
import emailRoutes from './Routes/Email.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app =  express()
app.use(bodyParser.json());
app.use(cors());
app.use('/emailService', emailRoutes);
app.use(express.json());
// app.use(emailRoutes);
app.listen(8800,()=>{
    console.log("Connected to backend!")
})

