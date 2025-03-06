import React from 'react'
import Header from '../other/header'
import TaskNum from '../other/taskListNumber'
import TaskList from '../taskList/taskList'

const EmpDashBoard = ({data}) => {
  // console.log(data); 
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen  '>

      <Header data={data} /> 

      <TaskNum data={data} />

      <TaskList data={data} />

    </div>
  )
}

export default EmpDashBoard