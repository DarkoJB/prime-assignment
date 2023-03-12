import React, { useState, useEffect } from 'react';
import styles from '../../components/Create_Employee/Create_Employee.module.css';




const Create_Employee = () => {
  const [id, setId] = useState(1);
  const [employeeArr, setEmployeeArr] = useState([]);
  useEffect(()=>{
    const employees = JSON.parse(localStorage.getItem('employeesArray'));
    setEmployeeArr(employees);
    getLastId(employees);
  }, []);

  const getLastId = (employees) =>{
    console.log(employees.length);
    if(employees.length){
      let lastEmployee = employees[employees.length - 1];
      let lastId = lastEmployee.id;
      setId(lastId);
    }
    // else{
    //   setId(0);
    // }
  };

  const [clicked, setClicked] = useState(false);

  const [formData, setFormData] = useState({
    id: id,
    name: '',
    email: '',
    phone_number: '',
    date_birth: '',
    salary: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      id: id,
      name: '',
      email: '',
      phone_number: '',
      date_birth: '',
      salary: '',
    });
    employeeArr.push(formData);
    localStorage.setItem('employeesArray', JSON.stringify(employeeArr));
    setId(id + 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.Container}>
      <button className={styles.butEmp} onClick={() => setClicked(!clicked)}>
        Add Employee
      </button>
      {clicked && (
        <form className={styles.empForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          ></input>

          <label htmlFor="phone_number">Date of birth:</label>
          <input
            type="date"
            id="date_birth"
            name="date_birth"
            value={formData.date_birth}
            onChange={handleChange}
          ></input>

          <label htmlFor="phone_number">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          ></input>

          <button className={styles.butEmp} type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Create_Employee;

//test test
