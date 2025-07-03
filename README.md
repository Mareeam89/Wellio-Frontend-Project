# Wellio - Frontend Project

Wellio is a health management web application that helps users track their vital health data, manage medications, and consult trusted health experts — all in one simple, user-friendly interface.

This project focuses solely on the **frontend** and utilizes **mock API tools** to simulate backend functionality for seamless development and testing.

---

## 📚 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Technologies & Frameworks Used](#technologies--frameworks-used)
- [Mock API Setup](#mock-api-setup)
- [Getting Started](#getting-started)
- [Usage Guidelines](#usage-guidelines)
- [Folder Structure](#folder-structure)
- [License](#license)
- [Contributors](#contributors)

---

## 🚀 Project Overview
Wellio is built to:
- Enable users to track vital health statistics like heart rate, blood pressure, etc.
- Provide a simple medication management system.
- Allow users to book consultations with trusted health experts.

This project is **frontend-only** and uses **mock APIs** to replicate backend services for testing and demonstration.

---

## ✨ Features
- Mock user authentication.
- Vital signs tracking dashboard.
- Medication management (add, edit, delete medications).
- Health expert consultation booking interface.
- Fully responsive design (mobile and desktop).

---

## 🏗️ Project Architecture
The project uses a **component-based architecture** in React for better scalability and maintainability.

# Project Name
**Wellio Porject**

---

## Wellio-frontend
├── public/ # Static assets
├── src/
│ ├── api/ # Mock API configurations
│ ├── components/ # Reusable UI components
│ ├── pages/ # Application pages (Dashboard, Login, etc.)
│ ├── utils/ # Helper functions
│ ├── mocks/ # Mock API handlers (MSW or JSON Server)
│ ├── App.js # Root component
│ ├── index.js # Entry point
│ └── styles/ # Global and component-level styles
├── package.json
└── README.md

---

## 🛠️ Technologies & Frameworks Used
- **React.js** (Frontend Framework)
- **React Router** (Routing)
- **Tailwind CSS** (Styling)
- **Axios** (HTTP Requests)
- **Mock API Tools:**
   - [JSON Server](https://github.com/typicode/json-server) (For quick API mocking)
   - [Mock Service Worker (MSW)](https://mswjs.io/) (For request interception during development)
- **Vercel** (Deployment)

---

## 🔌 Mock API Setup

### Option 1: JSON Server (Recommended for Quick Mocking)
1. Install JSON Server:
   ```bash
   npm install -g json-server

{
  "users": [],
  "vitals": [],
  "medications": [],
  "consultations": []
}

---

http://localhost:5000

---

## 📖 Usage Guidelines
Sign in using the mock login page.

Navigate to the dashboard to view and update vital health statistics.

Add, edit, or delete medications in the medication management section.

Book consultations via the consultation interface.

All API interactions are simulated using mock API tools.

---

## 📂 Folder Structure Overview
| Files | Purpose |
| ------------ | ----------- |
|[api]	|API interaction and mock endpoints
|[components]	|Reusable UI components
|[pages]	|Main pages (Dashboard, Login, etc.)
|[utils]	|Helper functions and API configs
|[mocks]	|Mock API handlers (MSW/JSON Server)
|[styles]	|CSS and Tailwind configurations

---

## 👩‍💻 Contributors
*Mariam Deborah Raji – Frontend Development, UI/UX*
*📧 mareeamraj@gmail.com*

*Cjay Chijioke Nnabueze – Frontend Development, API Integration*
*📧 chijiokennabueze@gmail.com*

*Anthony Igbodiegwu – Frontend Development, Testing*
*📧 peakybeetle@gmail.com*