import React, { useState } from 'react';
import employees from '../../assets/mock_data';
import { useAppDispatch } from '../../redux/hooks';
import { removeEmployee } from '../../redux/employeeSlice';

const Delete_Employee = () => {
    const dispatch = useAppDispatch();
    const handleClick = (event) =>{
        dispatch(removeEmployee.formData);
    };
    console.log("Delete");
  return (
    <div>Delete_Employee</div>
  )
}

export default Delete_Employee
