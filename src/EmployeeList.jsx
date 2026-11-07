import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
    if (employees.length === 0) {
        return <p className="empty-message">No employees found.</p>;
    }

    return (
        <div className="employee-list">
            {employees.map((employee) => (
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                />
            ))}
        </div>
    );
}

export default EmployeeList;