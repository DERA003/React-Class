

import { ChangeEvent, FormEvent, useState } from "react";
import { IEmployee } from "../interface/employee.interface";
        
const Register = () => {
    const[profile,setProfile] = useState<IEmployee>({
        name:"",
        email:"",
        id:0,
    })

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name,value}= event.target
        setProfile(prevProfile => ({
             ...prevProfile,
             [name]:name==="id"?Number(value):value
        }))
    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        console.log("User Profile:",profile)
    }
    return (
       <>
       <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="number">Id:</label>
            <input type="number" id="id" value={profile.id} onChange={handleChange} name="id"/>
        </p>
        <p>
            <label htmlFor="text">Name:</label>
            <input type="text" id="name" value={profile.name} onChange={handleChange} name="name" />
        </p>
        <p>
            <label htmlFor="text">Id:</label>
            <input type="text" id="email" value={profile.email} onChange={handleChange}name="email" />
        </p>
        <p>
            <button type="submit">Submit</button>
        </p>
       </form>
       <h2>User Info:</h2>
       <p>Id:{profile.id}</p>
       <p>Fullname: {profile.name.toUpperCase()}</p>
       <p>Email: {profile.email.toUpperCase()}</p>
       </>
    );
};
export default Register;