import joi from 'joi'
import { validObjectId } from '../../middlewares/validation.js'

//applyJob
export const applyJob = joi.object({
    id: joi.string().custom(validObjectId).required(),
    userTechSkills: joi.array().items(joi.string().required()).required(),
    userSoftSkills: joi.array().items(joi.string().required()).required(),
}).required()

//getApplicationsForJobs
export const getApplicationsForJobs = joi.object({
    id: joi.string().custom(validObjectId).required()
}).required()