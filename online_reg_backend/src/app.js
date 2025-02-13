import express from "express"
import cors from "cors";

const app = express()

app.use(
  cors({
    origin: process.evn.CORS_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  }),
);
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true , limit:"20kb"}))
app.use(express.static("public"))




export{app}


