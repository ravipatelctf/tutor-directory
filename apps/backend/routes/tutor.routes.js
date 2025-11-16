import express from "express";
import { addNewTutor, getTutorByAddress } from "../controllers/tutor.controllers.js";

const router = express.Router();

// //---------------------------------------------------------------------------------------------------------
// app.get("/auth/google", (req, res) => {
//     const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.BACKEND_URL}:${process.env.PORT}/auth/google/callback&response_type=code&scope=profile email`;
//     res.redirect(googleAuthUrl);
// })

// app.get("/auth/google/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) {
//         return res.status(400).send("Authorization code not provided.");
//     }
//     let accessToken;
//     try {
//         const tokenResponse = await axios.post(`https://oauth2.googleapis.com/token`, {
//             client_id: process.env.GOOGLE_CLIENT_ID,
//             client_secret: process.env.GOOGLE_CLIENT_SECRET,
//             code,
//             grant_type: "authorization_code",
//             redirect_uri: `${process.env.BACKEND_URL}:${PORT}/auth/google/callback`,
//         },{
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             }
//         });

//         accessToken = tokenResponse.data.access_token;
//         res.cookie("access_token", accessToken);
//         return res.redirect(`${process.env.FRONTEND_URL}/v1/profile/google`);

//     } catch (error) {
//         res.status(500).json({error})
//     }
// })


//---------------------------------------------------------------------------------------------------------

router.get("/", getTutorByAddress);
router.post("/", addNewTutor);

export default router;