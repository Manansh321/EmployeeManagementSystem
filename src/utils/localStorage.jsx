const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            { "active": true, "taskTitle": "Ui Design", "description": "Design the user interface for the web application.", "taskDate": "2024-02-15", "newTask": true, "completed": false, "failed": false },
            { "active": false, "taskTitle": "API Design", "description": "Create and document APIs for the backend.", "taskDate": "2024-01-10", "newTask": false, "completed": true, "failed": false },
            { "active": false, "taskTitle": "Schema Design", "description": "Design the database schema and relationships.", "taskDate": "2024-01-20", "newTask": false, "completed": true, "failed": false } 
        ],
        "taskCount": { "active": 1, "newTask": 1, "completed": 2, "failed": 0 }
    },  
    {
        "id": 2,
        "firstName": "Neha",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            { "active": true, "taskTitle": "Schema Design", "description": "Develop a structured schema for data storage.", "taskDate": "2024-02-12", "newTask": true, "completed": false, "failed": false },
            { "active": false, "taskTitle": "Ui Design", "description": "Ensure the UI meets accessibility and usability standards.", "taskDate": "2024-01-08", "newTask": false, "completed": true, "failed": false },
            { "active": false, "taskTitle": "BackEnd Design", "description": "Plan and develop backend architecture.", "taskDate": "2024-01-18", "newTask": false, "completed": true, "failed": false }
        ],
        "taskCount": { "active": 3, "newTask": 1, "completed": 2, "failed": 0 }
    },
    {
        "id": 3,
        "firstName": "Raj",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            { "active": true, "taskTitle": "Documentation", "description": "Write technical documentation for the project.", "taskDate": "2024-02-10", "newTask": true, "completed": false, "failed": false },
            { "active": false, "taskTitle": "Ui Design", "description": "Improve the existing UI based on feedback.", "taskDate": "2024-01-12", "newTask": false, "completed": true, "failed": false },
            { "active": false, "taskTitle": "Testing", "description": "Perform unit and integration testing.", "taskDate": "2024-01-25", "newTask": false, "completed": true, "failed": false }
        ],
        "taskCount": { "active": 2, "newTask": 1, "completed": 2, "failed": 0 }
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            { "active": true, "taskTitle": "Ui Design", "description": "Develop a user-friendly interface.", "taskDate": "2024-02-14", "newTask": true, "completed": false, "failed": false },
            { "active": false, "taskTitle": "Debugging", "description": "Identify and fix software bugs.", "taskDate": "2024-01-22", "newTask": false, "completed": true, "failed": false },
            { "active": false, "taskTitle": "Testing", "description": "Execute test cases and validate results.", "taskDate": "2024-01-28", "newTask": false, "completed": true, "failed": false }
        ],
        "taskCount": { "active": 4, "newTask": 1, "completed": 2, "failed": 0 }
    },
    {
        "id": 5,
        "firstName": "Vikram",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            { "active": true, "taskTitle": "API Design", "description": "Define RESTful API endpoints.", "taskDate": "2024-02-18", "newTask": true, "completed": false, "failed": false },
            { "active": false, "taskTitle": "Testing", "description": "Perform end-to-end testing of features.", "taskDate": "2024-01-16", "newTask": false, "completed": true, "failed": false },
            { "active": false, "taskTitle": "Debugging", "description": "Troubleshoot and resolve software issues.", "taskDate": "2024-01-26", "newTask": false, "completed": true, "failed": false }
        ],
        "taskCount": { "active": 1, "newTask": 1, "completed": 2, "failed": 0 }
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        password: "123",
    },
]

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    // console.log(employees, admin);  

    return { employees, admin };
}

// setLocalStorage();
// getLocalStorage();
