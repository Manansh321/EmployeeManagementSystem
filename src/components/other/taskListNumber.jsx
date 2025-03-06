import React from 'react'

const TaskNum = (data) => {
    // console.log(data);
    
    return (  
        <div className='  flex screen mt-10 justify-between gap-5 ' >
 
            <div className='py-6 px-9 rounded-xl w-[45%] bg-red-400 '>
                <h2 className='text-3xl font-semibold' >{data.data.taskCount.newTask}</h2> 
                <h3 className='text-xl font-medium '>New Task</h3>
            </div>  
            <div className='py-6 px-9 rounded-xl w-[45%] bg-green-400 '>
                <h2 className='text-3xl font-semibold' >{data.data.taskCount.completed}</h2>
                <h3 className='text-xl font-medium '>New Task</h3>
            </div>
            <div className='py-6 px-9 rounded-xl w-[45%] bg-blue-400 '>
                <h2 className='text-3xl font-semibold' >{data.data.taskCount.active}</h2>
                <h3 className='text-xl font-medium '>New Task</h3>
            </div>
            <div className='py-6 px-9 rounded-xl w-[45%] bg-purple-400 '>
                <h2 className='text-3xl font-semibold' >{data.data.taskCount.failed}</h2>
                <h3 className='text-xl font-medium '>New Task</h3>
            </div>

        </div>
    )
}

export default TaskNum