import React, { useState } from 'react';
import styles from '../../components/Task/Task.module.css';
import { useAppSelector } from '../../redux/hooks';
const Task = () => {
  const employees = useAppSelector((state) => state.employee.employeeArr); ///////////// OVDE IZ STORA PRISTUPAMO ELEMENTIMA NIZA (EMPLOYEARR) ///////////////////

  const [clicked, setClicked] = useState(false);
  console.log(employees);
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskTop}>
        <p>Name</p>
        <ul className={styles.list}>
          <li>
            <button
              className={styles.butTask}
              onClick={() => setClicked(!clicked)}
            >
              Read
            </button>
          </li>
          <li>
            <button className={styles.butTask}>Update</button>
          </li>
          <li>
            <button className={styles.butTask}>Delete</button>
          </li>
        </ul>
      </div>
      {clicked && (
        <div className={styles.taskBot}>
          <p>Title</p>
          <p>Description</p>
          <p>Assignee</p>
          <p>Due Date</p>
        </div>
      )}
    </div>
  );
};

export default Task;
