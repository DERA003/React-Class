import { useState } from "react";


        
const employeeTask = () => {
    const[employees, setEmployee] = useState<IEmployeeTask[]>([])
    const[userInput, setUserInput] = useState("")

    function AddEmployee() {
        if (userInput.trim()) {
            const newEmployee ={
                id: Date.now(),
                text:userInput,
                completed:false
            }
            setEmployee([...employees,newEmployee])
            setUserInput("")
        }
    }
    function removeEmployee(id:number) {
        setEmployee(employees.filter(employee=>employee.id !== id))
    }
    return (
        <>
        <div className="form-box" style={{ width:"350px",height:"500px", backgroundColor:"rgb(6, 6, 100)"}}>
            <h2 style={{color:"white"}}>List Of Company Employees</h2>
            <input type="text" value={userInput}  onChange={(e) =>setUserInput(e.target.value)} placeholder='Enter Employee Details' 
            style={{height:"30px", margin:"5px"}}/>  
            <button onClick={AddEmployee} style={{width:"100px"}}>Search</button>
            <ol>
                {employees.map(employee=>
                 <li key={employee.id} style={{fontSize:"14px", color:"white"}}>Name:{employee.text} <button style={{marginLeft:"10px", backgroundColor:"red"}} onClick={()=>removeEmployee(employee.id)}>
                    Delete</button><br/>Id:{employee.id}</li>
                )}
            </ol>

        </div>
    
        </>
    );
};
export default employeeTask;