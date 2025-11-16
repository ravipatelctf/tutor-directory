import { Tutor } from "../models/tutor.models.js";


export async function getTutorByAddress(req, res) {
    try {
        const queryObj = {};
        if (req.query.country && req.query.stateOrUT && req.query.district) {
            queryObj.country = req.query.country;
            queryObj.stateOrUT = req.query.stateOrUT;
            queryObj.district = req.query.district;
        } else {
            res.status(400).json({error: "All fields are required!"})
            return;
        }
        const tutors = await Tutor.find(queryObj);
        if (tutors) {
            res
                .status(200)
                .send(tutors)
        } else {
            res
                .status(404)
                .json({error: "Data Not Found!"})
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to load data!"})
    }
}

export async function addNewTutor(req, res) {
    try {
        const newTutor = new Tutor(req.body);
        const savedTutor = await newTutor.save();
        if (savedTutor) {
            res
                .status(200)
                .send(savedTutor)
        } else {
            res
                .status(400)
                .json({error: "All fields are required!"})
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to create data!"})
    }
}