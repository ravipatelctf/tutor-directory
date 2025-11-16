import { initializeDatabase } from "./db/db.connect.js";
import tutorRoutes from "./routes/tutor.routes.js";
import express from "express";

const app = express()
app.use(express.json());

import cors from "cors";
const corsOptions = {
  origin: ["http://localhost:5173", "https://tutor-directory.vercel.app"],
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

app.use("/api/v1/tutors", tutorRoutes);

//---------------------------------------------------------------------------------------------------------
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
//---------------------------------------------------------------------------------------------------------