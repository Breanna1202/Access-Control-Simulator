# Access Control Simulator

An interactive, educational security playground designed to help developers and system administrators understand Role-Based Access Control (RBAC) and permission matrices through real-time simulation.

---

## About the Project

In complex systems, managing user permissions can quickly become a bottleneck. This simulator was built to bridge the gap between abstract security policies and practical implementation. Users can dynamically assign roles, toggle specific permissions, and immediately see how those changes affect a simulated user's access to secure system resources.

This tool acts as both a visual debugger for developers and an intuitive learning playground for beginners entering the cybersecurity space.

## Key Features

- **Interactive Permission Matrix:** Toggle read, write, and execute permissions across multiple administrative roles.
- **Real-Time Access Evaluation:** Visual indicators immediately update to show "Allowed" vs. "Denied" access paths as roles are modified.
- **Responsive Interface:** Fully responsive design built to run seamlessly on both desktop monitors and mobile devices.

## Tech Stack

- **Frontend:** React, Tailwind CSS, JavaScript (ES6)
- **Tooling:** Git, npm, VS Code

## Project Status & Active Roadmap ##

This project is currently under active development. My goal is to build an educational, end-to-end playground that makes complex authorization concepts accessible to anyone. 

Below is the current feature set and my upcoming release roadmap.

### Completed (Current Release)
- **Interactive UI Engine:** Built a fully responsive frontend layout using **React** allowing users to dynamically toggle system permissions.
- **Visual State Matrix:** Implemented real-time color-coded indicators representing active "Allowed" vs. "Denied" policies as roles change.
- **Foundational RBAC Logic:** Developed frontend state validation to simulate standard Role-Based Access Control configurations.

### In Progress (Targeting Late July 2026)
- **Python Backend API Integration:** 
  - Transitioning authorization logic from frontend state to a dedicated Python engine (FastAPI/Flask).
  - Implementing rigorous policy-validation endpoints to process complex permission matrices on the server side.
- **Persistent Storage:** Adding a lightweight SQLite configuration to allow users to save, export, and share custom access topologies.

### Planned Infrastructure (Targeting August 2026)
- **Docker Containerization:** Packaging the React frontend and Python backend into multi-container setups (`docker-compose`) for seamless, one-command local setups.
- **Expanded Scenarios:** Creating interactive "missions" (e.g., "Secure a simulated medical database") to gamify the learning experience.
- **Enhanced Visualizations:** Building a dynamic node graph (using libraries like React Flow) to visually map active access paths from users to resources.

## Installation & Local Setup ##

Follow these simple steps to clone the repository and run the simulator on your local machine.

### Prerequisites

Make sure you have the following installed:
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (comes packaged with Node.js)

### Step-by-Step Setup

### 1. Clone the Repository
Open your terminal and run:
```bash
git clone [https://github.com/](https://github.com/)[Your-GitHub-Username]/access-control-simulator.git
cd access-control-simulator

##Install the required Node packages specified in the package.json
npm install 

##Launch the local server to run the application
npm start

###Running with Docker (Upcoming Feature)
##Once containerization is complete, you will be able to run the entire app (Frontend & Backend) with a single command
docker-compose up --build

## 💡 Quick Pro-Tips Before You Push:
1. **Replace the placeholder URL:** Don't forget to swap out `[Your-GitHub-Username]` in the clone link with your actual GitHub username so the command is copy-paste ready!
2. **Double-check the start command:** If you created your project using Vite instead of Create React App, change `npm start` to `npm run dev` and change the port number to `http://localhost:5173`. 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 📄 License

Distributed under the MIT License. See the [LICENSE](LICENSE) file for more information.