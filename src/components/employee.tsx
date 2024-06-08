import React from "react";
import { EmployeeList } from "../interface/employee.interface"

const Employee: React.FC<EmployeeList> = ({ employees }) => {
  return (
    <div>
      <h2>List of Employee</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name.toUpperCase()} , {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;

