# React TypeScript DND-Kit Kanban Dashboard

A simple Kanban dashboard built with React, TypeScript, and DND-Kit for drag-and-drop functionality.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Built With](#built-with)
- [License](#license)

## Features

- **Drag-and-Drop:** Utilizes the DND-Kit library for seamless drag-and-drop functionality.
- **React Components:** Organized and reusable React components for the Kanban board, lists, and cards.
- **TypeScript:** Strongly-typed codebase for improved developer experience and reduced runtime errors.
- **Responsive Design:** Responsive layout for a seamless experience on various screen sizes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mikolajhere/kanban-dashboard.git

2. Navigate to the project directory:

   ```bash
   cd kanban-dashboard

3. Install dependencies

   ```bash
   npm install
   # or
   yarn

### Usage

1. Start the development server:

   ```bash 
   npm start
   # or
   yarn start

2. Open your browser and go to http://localhost:3000 to view the Kanban dashboard.

3. Drag and drop cards between lists to experience the DND functionality.

### Folder structure

    ```lua
    /src
    |-- components
    |   |-- Board.tsx
    |   |-- Card.tsx
    |   |-- List.tsx
    |-- App.tsx
    |-- index.tsx
    ...
    ```

- components: Contains React components for the Kanban board, lists, and cards.
- App.tsx: Main component integrating the board and lists.
- index.tsx: Entry point of the application.

### Build with

- <a href="https://reactjs.org/" target="_new">React</a> - JavaScript library for building user interfaces.</a>
- <a href="https://www.typescriptlang.org/" target="_new">TypeScript</a> - Typed superset of JavaScript.</a>
- <a href="https://dndkit.com/" target="_new">DND-Kit</a> - A modern drag-and-drop library.</a>

### License

This project is licensed under the MIT License - see the LICENSE file for details.


