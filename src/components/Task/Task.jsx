import React, { useState } from 'react';
import styles from '../../components/Task/Task.module.css';
import Update_Task from '../Update_Task/Update_Task';
const Task = ({
  id,
  title,
  description,
  assignee,
  due_date,
  updateTask,
  deleteTask,
}) => {
  const [clicked, setClicked] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskTop}>
        <p>{title}</p>
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
            <button className={styles.butTask} onClick={handleClick}>
              Update
            </button>
          </li>
          <li>
            <button
              className={styles.butTask}
              onClick={() => deleteTask(id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
      {clicked && (
        <div className={styles.taskBot}>
          <p>{title}</p>
          <p>{description}</p>
          <p>{assignee}</p>
          <p>{due_date}</p>
        </div>
      )}
      {isOpen && (
        <div className={styles.updateTask}>
          <Update_Task id={id} updateTask={updateTask} />
        </div>
      )}
    </div>
  );
};

export default Task;
