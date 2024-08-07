import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import contact from './routes/contact.js'
import AuthRoutes from './routes/AuthRoutes.js'
import cors from 'cors'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000
app.use(cors())
app.use(express.json())
app.use(cookieParser());
mongoose.connect(process.env.MONGO_URI)
.then((res)=>{
    console.log('DB Connected')
})
.catch((err)=>{
    console.log(`Error While connecting DB ${err}`)
})


app.use('/contact', contact)
app.use('/auth', AuthRoutes)


app.listen(PORT, ()=>{
    console.log( `Server running on http://localhost:${PORT}`)
})

