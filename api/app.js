import express from "express";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cors from "cors"

const app = express();
const PORT = 8800;
app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());



app.use("/api/posts",postRoute);
app.use("/api/auth", authRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})