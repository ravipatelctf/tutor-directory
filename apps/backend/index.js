import { initializeDatabase } from "./db/db.connect.js";
import tutorRoutes from "./routes/tutor.routes.js";
import googleAuthRoutes from  "./routes/auth.routes.js"
import express from "express";

const app = express()
app.use(express.json());

import cors from "cors";
import { verifyJwt } from "./middlewares/verifyJwt.js";
const corsOptions = {
  origin: ["http://localhost:5173", "https://tutordirectory.vercel.app"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

await initializeDatabase();

// home route
app.get("/", async (req, res) => {
    try {
        res
            .status(200)
            .send("This is tutor directory backend api.");
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to load data!"})
    }
})
//---------------------------------------------------------------------------------------------------------

app.use("/auth", googleAuthRoutes);

// Auth check route
app.get("/auth/check", verifyJwt, (req, res) => {
  res.status(200).json({ valid: true, user: req.user });
});

app.use("/api/v1/tutors", tutorRoutes);

//---------------------------------------------------------------------------------------------------------
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
//---------------------------------------------------------------------------------------------------------