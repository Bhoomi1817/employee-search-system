function EmployeeCard({ employee }) {
    return (
        <div className="employee-card">
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
            <p>Designation: {employee.designation}</p>
            <p>Date of Joining: {employee.date_of_joining}</p>
        </div>
    );
}

export default EmployeeCard;