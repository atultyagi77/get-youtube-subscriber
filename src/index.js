// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './env'
})

connectDB()


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// require('dotenv').config({path: './env'})



// import express from "express";
// const app = express()

// ;( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", ()=>{
//         console.log("Not Able to talk to DB: ", error);
//         throw error
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`Application is listening on port ${process.env.PORT}`);
//        })

//     } catch (error) {
//         console.log("Error in connecting to DB: ", error)
//         throw error
//     }
// })()