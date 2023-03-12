import React, { useState } from 'react';
import styles from './Update_Task.module.css';

const Update_Task = ({id, updateTask}) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        assignee: '',
        due_date: '',
        });
        const handleSubmit = (event) => {
        event.preventDefault();

        // const jsonData = JSON.stringify(formData);
        setFormData({
            title: '',
            description: '',
            assignee: '',
            due_date: '',
        });

        updateTask({
            id,
            ...formData,
        });
        };

        const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        };
  return (
    <div className={styles.updateTask}>
      <div className={styles.taskBot}>
      <form className={styles.empForm} onSubmit={handleSubmit}>
          <label htmlFor="name">title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <label htmlFor="email">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <label htmlFor="phone_number">Assignee:</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          ></input>

          <label htmlFor="date_birth">Date of birth:</label>
          <input
            type="text"
            id="date_birth"
            name="date_birth"
            value={formData.date_birth}
            onChange={handleChange}
          ></input>
          <button className={styles.butEmp} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update_Task