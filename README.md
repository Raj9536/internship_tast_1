# Internship Task 1 - CI/CD Pipeline using GitHub Actions

This project demonstrates the automation of a CI/CD pipeline for a Node.js application using GitHub Actions and DockerHub.

## 🔧 Tech Stack
- Node.js
- Docker
- GitHub Actions

## 📄 Task Overview
The goal is to automate:
1. Installing dependencies
2. Running tests
3. Building a Docker image
4. Logging into DockerHub
5. Pushing the image to DockerHub

## 🚀 CI/CD Workflow (GitHub Actions)
Whenever code is pushed to the `main` branch:
- GitHub Actions is triggered
- The app is built and containerized using Docker
- The image is pushed to DockerHub



## 📂 Folder Structure

INTERNSHIP_TASK_1/
├── .github/
│   └── workflows/
│       └── main.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md ✅
├── app.js (or your main file)
├── .gitignore


