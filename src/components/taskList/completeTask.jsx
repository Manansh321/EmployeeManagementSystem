import React from 'react'

const CompletedTask = ({ data }) => {
    return (

        <div className="h-full flex-shrink-0 p-5 w-[300px] bg-pink-500  rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '> {data.active}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4> 
            </div>

            <h2 className='mt-5 text-2xl font-semibold' > {data.taskTitle} </h2>

            <p className='mt-2 text-sm'>{data.description}</p>


            <div className='mt-2 '>
                <button className='w-full'>Completed</button>
            </div>

        </div>

    )
}

export default CompletedTask