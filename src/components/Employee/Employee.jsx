import React, {useState} from 'react';
import styles from './Employee.module.css';
import Update_Employee from '../Update_Employee/Update_Employee';
import Delete_Employee from '../Delete_Employee/Delete_Employee';
import { useAppDispatch } from '../../redux/hooks';
import { removeEmployee } from '../../redux/employeeSlice';
const Employee = ({id, name, email, phone, dob, salary}) => {
    const [clicked, setClicked] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    const handleClick = () => {
        setOpen(!isOpen);
    };
  return (
    <div className={styles.employeeContainer}>
        <div className={styles.employeeTop}>
            <p>{name}</p>
            <ul className={styles.list}>
                <li><button className = {styles.butEmp} onClick={()=>setClicked(!clicked)}>Read</button></li>
                <li><button className = {styles.butEmp} onClick={handleClick}>Update</button></li>
                <li><button className = {styles.butEmp} onClick={()=>dispatch(removeEmployee(id))}>Delete</button></li>
            </ul>
        </div>
        {clicked && <div className={styles.employeeBot}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{dob}</p>
            <p>{salary}</p>
        </div>}
        {isOpen && <div className={styles.updateEmp}><Update_Employee/></div>}
    </div>
  )
}

export default Employee;