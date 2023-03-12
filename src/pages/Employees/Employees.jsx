import React, {useEffect, useState} from 'react';
import Employee from '../../components/Employee/Employee';
import Create_Employee from '../../components/Create_Employee/Create_Employee';

const Employees = () => {
    const [empArr, setEmpArr] = useState([]);
    useEffect(()=>{
        setEmpArr (JSON.parse(localStorage.getItem('employeesArray')));
      }, []);

    return (
        <>
        <h1>Employees</h1>
        <Create_Employee/>
        {empArr.map(({id, name, email, phone, dob, salary})=> (
            <Employee
            name={name}
            email={email}
            phone={phone}
            dob={dob}
            salary={salary}
            id = {id}
            key = {id}
            />
        ))};
        </>
    )
}


export default Employees;
