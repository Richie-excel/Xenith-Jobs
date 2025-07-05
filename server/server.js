import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

const app = express();
config();
const port = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(cors());
app.use(express.json()); // built-in JSON body parsing

const jobsFilePath = path.join(__dirname, 'jobs.json');

// Utility: read jobs
const readJobs = () => {
    try {
        const data = fs.readFileSync(jobsFilePath, 'utf-8');
        const parsed = JSON.parse(data);
        // If the JSON file contains {jobs: [array]}, extract the array
        // If it's already an array, return it as is
        return Array.isArray(parsed) ? parsed : (parsed.jobs || []);
    } catch (err) {
        console.error("Error reading jobs.json:", err);
        return [];
    }
};

const readJob = (id) =>{
    const jobs = readJobs();
    const job = jobs.find(job => job.id === id)
    
    return JSON.stringify(job);

}



// Utility: write jobs
const writeJobs = (jobs) => {
    try {
        fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2), 'utf-8');
    } catch (err) {
        console.error("Error writing to jobs.json:", err);
    }
};

// 🚩 GET /jobs - Get all jobs
app.get('/jobs', (req, res) => {
    const jobs = readJobs();    
    return res.json(jobs);
});

app.get('/jobs/:id', (req,res) => {
    const job = readJob(req.params.id);
    if (!job) {
        return res.status(404).json({ error: "Job not found" });
    }
    res.json(JSON.parse(job));
})


// 🚩 POST /jobs - Add a new job
app.post('/jobs/add', (req, res) => {
    const jobs = readJobs();
    const newJob = {
        id: Date.now().toString(),
        ...req.body,
    };
    jobs.push(newJob)
    writeJobs(jobs);
    res.status(201).json(newJob);
});

// 🚩 DELETE /jobs/:id - Delete a job
app.delete('/jobs/:id', (req, res) => {
    const jobs = readJobs();
    const jobId = req.params.id;
    const filteredJobs = jobs.filter(job => job.id !== jobId);

    if (filteredJobs.length === jobs.length) {
        return res.status(404).json({ error: "Job not found" });
    }

    writeJobs(filteredJobs);
    res.json({ message: "Job deleted", id: jobId });
});

// 🚩 PUT /jobs/:id - Update a job
app.put('/jobs/:id', (req, res) => {
    const jobs = readJobs();
    const jobId = req.params.id;
    const updatedData = req.body;

    const jobIndex = jobs.findIndex(job => job.id === jobId);
    console.log("Job index:",jobIndex);
    
    if (jobIndex === -1) {
        return res.status(404).json({ error: "Job not found" });
    }

    const updatedJob = { ...jobs[jobIndex], ...updatedData };
    jobs[jobIndex] = updatedJob;
    console.log(jobs[jobIndex]);
    
    writeJobs(jobs);
    res.json(updatedJob);
});

// Test root
app.get('/', (req, res) => {
    res.send('API is running!');
});


export default app;