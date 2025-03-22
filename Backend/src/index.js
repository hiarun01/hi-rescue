import express from "express";
const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // used to send the data using url parameter
app.use(cookieParser())

app.listen(process.env.PORT, () => {
    console.log("working fine on port")
})