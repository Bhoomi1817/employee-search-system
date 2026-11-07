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

## Project Structure

```text
frontend/
├── src/
│   ├── SearchBar.jsx
│   ├── EmployeeCard.jsx
│   ├── EmployeeList.jsx
│   ├── services/
│   │   └── employeeService.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
├── .env.example
└── package.json
```

## Setup Instructions

1. Navigate to the frontend directory.
2. Install dependencies:

   `npm install`

3. Configure the API URL in `.env`:

   `VITE_API_URL=http://localhost:8000`

4. Start the development server:

   `npm run dev`

## Search Optimization

The frontend uses debouncing to wait 500 milliseconds after the user stops typing before initiating an API request. This reduces unnecessary requests.

Previous requests are also cancelled when a newer search begins.

## Project Status

Frontend implementation completed. Backend integration and end-to-end testing are pending.