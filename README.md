# Employee Directory Search System

## Project Overview

A React-based Employee Directory Search System that allows users to search for employees by name or department.

## Technologies Used

- React.js
- Vite
- JavaScript
- HTML
- CSS

## Frontend Features

- Search employees by name or department.
- Debounced search with a 500ms delay to reduce unnecessary API requests.
- Loading indicator while fetching employee data.
- Error handling for failed API requests.
- Message displayed when no employees are found.
- Reusable React components.
- Environment variable configuration for the API base URL.
- Previous API requests are cancelled when a newer search begins.

## Project Structure

```text
Employee-Search/
├── public/
├── src/
│   ├── assets/
│   ├── services/
│   │   └── employeeService.js
│   ├── App.jsx
│   ├── App.css
│   ├── EmployeeCard.jsx
│   ├── EmployeeList.jsx
│   ├── SearchBar.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Bhoomi1817/employee-search-system.git
```

2. Navigate to the project directory:

```bash
cd employee-search-system
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root using `.env.example` as a reference.

Configure the API URL:

```env
VITE_API_URL=http://localhost:8000
```

5. Start the development server:

```bash
npm run dev
```

## Search Optimization

The frontend uses debouncing to wait 500 milliseconds after the user stops typing before initiating an API request. This reduces unnecessary requests.

Previous requests are also cancelled when a newer search begins.

## Project Status

Frontend implementation completed.

Backend implementation and end-to-end API testing are pending. The frontend is configured to communicate with a backend API through the environment variable `VITE_API_URL`.
