import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoute.js";
import connectToMongoDB from "./database/connectMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello world!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Application runnning on port ${PORT}`);
});
