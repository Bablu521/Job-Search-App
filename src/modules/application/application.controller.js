import applicationModel from "../../../DB/models/application.model.js";
import cloudinary from "../../utils/cloudinary.js";
import { asyncHandler } from "../../utils/errorHandling.js";
import jobModel from './../../../DB/models/job.model.js';

//applyJob
export const applyJob = asyncHandler(async (req, res, next) => {
    if (!req.file) {
        return next(new Error("Please Upload Resume", { cause: 400 }))
    }
    const { secure_url, public_id } = await cloudinary.uploader.upload(req.file.path, { folder: "Job Search App/Resumes" })
    const job = await jobModel.findById({ _id: req.params.id })
    if (!job) {
        return next(new Error("Job Not Found", { cause: 404 }))
    }
    const application = await applicationModel.create({
        jobId: req.params.id,
        userId: req.user._id,
        userTechSkills: req.body.userTechSkills,
        userSoftSkills: req.body.userSoftSkills,
        userResume: { url: secure_url, id: public_id }
    })
    return res.status(201).json({ message: "Done", application })
})


//getApplicationsForJobs
export const getApplicationsForJobs = asyncHandler(async (req, res, next) => {
    const job = await jobModel.findOne({ _id: req.params.id, addedBy: req.user._id })
    if (!job) {
        return next(new Error("Job Not Found", { cause: 404 }))
    }
    const application = await applicationModel.find({ jobId: job._id }).populate([
        {
            path: "userId"
        }
    ])
    return res.status(200).json({ message: "Done", application })
})