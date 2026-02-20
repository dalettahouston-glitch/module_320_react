import HomePage from "./HomePage";
// import EmployeeCard from "./components/EmployeeCard";
import "./App.css";
import EmployeePage from "./EmployeePage";
import { useState } from "react";


function App() {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const employees = [
        {
            firstName: "Thomas",
            lastName: "Long",
            title: "Chief Executive Officer",
            picture: "/tom.jpg",
            phone: "555-123-4567",
            email: "thomas.long@example.com",
        },
        {
            firstName: "Samuel",
            lastName: "Davis",
            title: "Chief Financial Officer",
            picture: "/samuel.jpg",
            phone: "555-987-6543",
            email: "samuel.davis@example.com",
        },
        {
            firstName: "Jane",
            lastName: "Wright",
            title: "Software Engineer",
            picture: "/jane.jpg",
            phone: "555-222-3333",
            email: "jane.wright@example.com",
        },
        {
            firstName: "John",
            lastName: "Smith",
            title: "Product Manager",
            picture: "/john.jpg",
            phone: "555-444-5555",
            email: "john.smith@example.com",
        },
        {
            firstName: "Emily",
            lastName: "Johnson",
            title: "UX Designer",
            picture: "/emily.jpg",
            phone: "555-666-7777",
            email: "emily.johnson@example.com",
        },
        {
            firstName: "Michael",
            lastName: "Brown",
            title: "QA Analyst",
            picture: "/michael.jpg",
            phone: "555-888-9999",
            email: "michael.brown@example.com",
        },
    ];
    return (
        <div className="app-container">
            <div className="left-panel">
                <HomePage
                    employees={employees}
                    onSelect={setSelectedEmployee}
                />
            </div>

            <div className="right-panel">
                {selectedEmployee ? (
                    <EmployeePage employee={selectedEmployee} />
                ) : (
                    <h2>Select an employee</h2>
                )}
            </div>
        </div>
    );
}

export default App;
