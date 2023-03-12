import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Home.module.css';
const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <h1 className={styles.title}><NavLink to={"/"}>Prime Software Assignment</NavLink></h1>
        <nav>
          <ul className={styles.nav}>
            <li><NavLink to={"/employees"}>Employees</NavLink></li>
            <li><NavLink to={"/tasks"}>Tasks</NavLink></li>
          </ul>
        </nav>
        
        {/* <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      </div>
      <div className={styles.outlet}>
        <Outlet/>
      </div>
    </>
  )
}

export default Home;