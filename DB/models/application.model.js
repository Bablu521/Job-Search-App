import mongoose, { Schema, model, Types } from "mongoose";

export const applicationSchema = new Schema({
    jobId: {
        type: Types.ObjectId,
        ref: "Job",
        required: true
    },
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    userTechSkills: ["String"],
    userSoftSkills: ["String"],
    userResume: {
        url: { type: String, required: true },
        id: { type: String, required: true }
    }
}, { timestamps: true })

const applicationModel = mongoose.models.Application || model("Application", applicationSchema)

export default applicationModel