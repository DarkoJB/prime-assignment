import React, {useState} from 'react';
import styles from '../../components/Create_Task/Create_Task.module.css';
import tasks from '../../assets/task_data';

const Create_Task = () => {
    const [clicked, setClicked] = useState(false);
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      assignee: '',
      due_date: '',
    });
    console.log(clicked);
    return (
      <div className={styles.createTask}>
          <button className = {styles.butTask} onClick={()=>setClicked(!clicked)}>Add Task</button>
          {clicked && <div className={styles.taskBot}>
            <p>Title <input type="text" name="" id="" /></p>
            <p>Description <textarea name="" id="" cols="20" rows="1"></textarea></p>
            <p>Assignee <select name="" id=""></select></p>
            <p>Due Date <input type="date" name="" id="" /></p>
            <button type="submit">Save Task</button>
        </div>}
      </div>
    )
}

export default Create_Task