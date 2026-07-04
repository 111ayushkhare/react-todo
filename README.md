# React Advanced To-Do Application

A modern, highly responsive React application built with TypeScript and Vite. This app features a clean user interface that supports full CRUD task management and dynamic light/dark mode switching.

---

## 🚀 Features

### Current Features
* **Full CRUD Operations**: Seamlessly add, view, edit, toggle, and delete tasks.
* **Theme Switching**: Dynamic toggle between Light Mode and Dark Mode.
* **Task Analytics**: Real-time task counting footer displaying total active tasks.
* **Strict Code Quality**: Pre-configured with TypeScript, ESLint, and Prettier.

### Upcoming Roadmap
* 🗓️ **Tabbed Timeframe Logs**: Separate designated tabs to track logs for **Yesterday**, **Today**, and **Tomorrow**.
* 🔐 **User Authentication**: Secure user-based account setups and session management.
* 🌐 **Backend Connectivity**: Persistent data synchronization via RESTful APIs/Websockets.
* 🤖 **AI Agent Integration**: Autonomous background processes to categorize, prioritize, and automate task management.

---

## 🛠️ Scripts & Code Quality Optimization

To integrate Prettier formatting smoothly into your workflow, update your `package.json` scripts section to the following:

```json
"scripts": {
  "dev": "vite",
  "build": "npm run format && tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,css,md}\""
}