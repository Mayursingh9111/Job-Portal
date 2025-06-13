import express from "express";
import { changeJobApplicatonStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from "../controllers/companyController.js";
import upload from "../config/multer.js";
import { protectCompany } from "../middleware/authMiddleware.js";

const router = express.Router();

//Register Company
router.post('/register',upload.single('image'), registerCompany);

//Company Login
router.post('/login', loginCompany);

//Get Company Data
router.get('/company',protectCompany, getCompanyData);

//Post a Job
router.post('/post-job',protectCompany, postJob);

//Get Applicent data of company
router.get('/applicants',protectCompany, getCompanyJobApplicants);

// Get Com any Job list
router.get('/list-jobs',protectCompany, getCompanyPostedJobs);

// Change Appliction Satus
router.post('/change-status',protectCompany, changeJobApplicatonStatus);

// Change Applictions Visablity
router.post('/change-visiblity',protectCompany, changeVisiblity);

export default router;