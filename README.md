# 💼 Job Portal Website

A feature-rich job portal connecting recruiters and job seekers. Supports job posting, application tracking, role-based access, and resume management. Built with the MERN stack and real-time features.

## 🌐 Live Demo
👉 [IndsiderJobs](https://job-portal-0007.netlify.app/)

---

## ⚙️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Clerk-3D3D3D?style=for-the-badge&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
 
</p>

---

## 🔑 Features

- Role-based access for Admins, Recruiters, and Job Seekers.
- Job posting and application workflows.
- Application history and job status management.
- Resume upload and preview with Cloudinary.
- Real-time application updates.
- Responsive design with Tailwind CSS.
- Scalable backend API with secure routing and MongoDB integration.

### 👨‍💻 Job Seeker
- View available jobs
- Apply to jobs with resume upload
- Track applied jobs
- Update resume

### 🏢 Company
- Register/Login
- Post jobs
- View applicants for each job
- Update application status and visibility

---

## 🔧 Tech Stack

- **Frontend:** React.js, Tailwind CSS (or CSS)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Clerk (or JWT, configurable)
- **File Uploads:** Multer (for resumes and images)

---

## 🔌 API Endpoints

### 🔹 User Routes

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | `/api/user`        | Get user data                   |
| POST   | `/api/apply`       | Apply for a job                 |
| GET    | `/api/application` | Get applied job data            |
| POST   | `/api/update-resume` | Upload/update resume          |

### 🔹 Job Routes

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | `/api/jobs/`       | Get all jobs                    |
| GET    | `/api/jobs/:id`    | Get job by ID                   |

### 🔹 Company Routes

| Method | Endpoint                | Description                        |
|--------|-------------------------|------------------------------------|
| POST   | `/api/company/register` | Register a company                 |
| POST   | `/api/company/login`    | Company login                      |
| GET    | `/api/company`          | Get logged-in company data         |
| POST   | `/api/post-job`         | Post a job                         |
| GET    | `/api/applicants`       | Get all applicants                 |
| GET    | `/api/list-jobs`        | Get all posted jobs                |
| POST   | `/api/change-status`    | Change application status          |
| POST   | `/api/change-visiblity` | Change job application visibility  |

---

