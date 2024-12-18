import express from "express";
import emailRoutes from './Routes/Email.js';

const app =  express()
app.use('/send-email', emailRoutes);
app.use(express.json());
// app.use(emailRoutes);
app.listen(8800,()=>{
    console.log("Connected to backend!")
})

