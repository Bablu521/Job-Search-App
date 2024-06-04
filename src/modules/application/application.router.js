import { Router } from "express";
const router = Router()
import * as applicationController from './application.controller.js'
import * as applicationSchema from './application.schema.js'
import { validation } from '../../middlewares/validation.js'
import { isAuthenticated } from './../../middlewares/authentication.js';
import { isAuthorized } from './../../middlewares/authorization.js';
import { fileUpload, fileValidation } from '../../utils/multer.cloud.js'

//applyJob
router.post("/:id", isAuthenticated, isAuthorized("user"), fileUpload(fileValidation.file).single("resume"), validation(applicationSchema.applyJob), applicationController.applyJob);

//getApplicationsForJobs
router.get("/:id", isAuthenticated, isAuthorized("HR"), validation(applicationSchema.getApplicationsForJobs), applicationController.getApplicationsForJobs)

export default router