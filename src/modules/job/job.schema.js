import joi from "joi";
import { validObjectId } from "../../middlewares/validation.js";

//addJob
export const addJob = joi.object({
    jobTitle: joi.string().min(3).max(20).required(),
    jobLocation: joi.string().valid("onsite", "remotely", "hybrid").required(),
    workingTime: joi.string().valid("part-time", "full-time").required(),
    seniorityLevel: joi.string().valid("Junior", "Mid-Level", "Senior", "Team-Lead", "CTO").required(),
    jobDescription: joi.string().min(10).max(200).required(),
    technicalSkills: joi.array().items(joi.string().required()).required(),
    softSkills: joi.array().items(joi.string().required()).required()
}).required();

//updateJob
export const updateJob = joi.object({
    id: joi.string().custom(validObjectId),
    jobTitle: joi.string().min(3).max(20),
    jobLocation: joi.string().valid("onsite", "remotely", "hybrid"),
    workingTime: joi.string().valid("part-time", "full-time"),
    seniorityLevel: joi.string().valid("Junior", "Mid-Level", "Senior", "Team-Lead", "CTO"),
    jobDescription: joi.string().min(10).max(200),
    technicalSkills: joi.array().items(joi.string().required()),
    softSkills: joi.array().items(joi.string().required()),
}).required()

//deleteJob
export const deleteJob = joi.object({
    id: joi.string().custom(validObjectId)
}).required()


//getCompanyJobs
export const getCompanyJobs = joi.object({
    companyName: joi.string().min(2).max(20).required()
}).required()


//getFilteredJobs
export const getFilteredJobs = joi.object({
    jobTitle: joi.string().min(3).max(20),
    jobLocation: joi.string().valid("onsite", "remotely", "hybrid"),
    workingTime: joi.string().valid("part-time", "full-time"),
    seniorityLevel: joi.string().valid("Junior", "Mid-Level", "Senior", "Team-Lead", "CTO"),
    technicalSkills: joi.array().items(joi.string().required())
}).required()