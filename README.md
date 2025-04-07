🚀 Task 1: Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)
📌 Objective
To automate the build and deployment process of a Node.js web application using GitHub Actions CI/CD pipeline.

🛠️ Tech Stack Used
Node.js

React

Docker

GitHub Actions

DockerHub

![image](https://github.com/user-attachments/assets/cc193a6a-c6f3-4add-b030-9d4e95f93cde)


🔄 CI/CD Workflow Steps
The CI/CD pipeline defined in .github/workflows/main.yml includes the following:

Trigger: On push to the main branch

Jobs:

Build the React app

Test the application using npm test

Dockerize the app using a Dockerfile

Push the image to DockerHub

✅ Test Case Result
A basic test exists in App.test.js to ensure that the React app renders properly.
You can run the test locally with:

bash
Copy
Edit
npm test
The test checks for a Learn React text, which might require an update if you've changed the homepage message.

🐳 Docker Commands Used
Build Docker Image:

bash
Copy
Edit
docker build -t <your-dockerhub-username>/internship-task1 .
Run the Container Locally:

bash
Copy
Edit
docker run -p 3000:3000 <your-dockerhub-username>/internship-task1
Push Image to DockerHub:

bash
Copy
Edit
docker push <your-dockerhub-username>/internship-task1
🌐 GitHub Actions CI/CD Logs
All steps such as installation, build, test, Docker image creation, and push were performed automatically via GitHub Actions and are visible in the Actions tab of the GitHub repository (once pipeline executes correctly and secrets are configured).

🔐 Secrets Used
DOCKER_USERNAME

DOCKER_PASSWORD

These are securely added to the GitHub repository under Settings → Secrets and Variables → Actions.

📌 Learning Outcomes
Understood how CI/CD automation works end-to-end.

Learned how GitHub Actions runners execute workflows.

Gained hands-on with Docker image creation and deployment.

Practiced writing test cases in a React app.
