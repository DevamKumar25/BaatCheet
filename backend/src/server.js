import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import {connectDb} from "./lib/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"
import chatRoute from "./routes/chat.route.js";
import cors from "cors";
import path from "path" 

dotenv.config();
const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true  // allow frontend to send the cookies
}))


const PORT = process.env.PORT;
const __dirname = path.resolve();



app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authRoutes)
app.use("/api/users",userRoute)
app.use("/api/chat",chatRoute)


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});


app.listen(PORT,() => {
    console.log(`Server is running on the ${PORT}`);
    connectDb();
})