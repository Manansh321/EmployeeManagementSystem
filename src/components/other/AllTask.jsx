import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const userData = useContext(AuthContext);
    // console.log(userData.employees);  

    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5 '>

            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
                <h2 className=' font-medium text-lg w-1/5'>Employee Name </h2>
                <h3 className=' font-medium text-lg w-1/5'>New Task </h3>
                <h4 className=' font-medium text-lg w-1/5'>Active Task </h4>
                <h4 className=' font-medium text-lg w-1/5'>Completed</h4>
                <h4 className=' font-medium text-lg w-1/5'>Failed</h4> 
            </div>

            <div className='overflow-auto '>

                {userData.employees.map(function (elem) {
                    return (  
                        <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded '>
                            <h2 className=' font-medium text-lg w-1/5 ' > {elem.firstName} </h2>
                            <h3 className=' font-medium text-lg w-1/5 text-blue-600'>{elem.taskCount.newTask} </h3>
                            <h5 className=' font-medium text-lg w-1/5 text-yellow-400'>{elem.taskCount.active} </h5>
                            <h5 className=' font-medium text-lg w-1/5 text-white'>{elem.taskCount.completed}</h5>
                            <h5 className=' font-medium text-lg w-1/5 text-red-600'>{elem.taskCount.failed}</h5> 
                        </div>
                    )
                })}

            </div>

        </div>

    )
}

export default AllTask 