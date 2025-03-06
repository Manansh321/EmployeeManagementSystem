import React from 'react'

const AcceptedTask = ({ data }) => {
    // console.log(data.taskTitle);
    // console.log(data.description);

    return (
        <div className="h-full flex-shrink-0 p-5 w-[300px] bg-red-400   rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '> {data.active}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold' > {data.taskTitle} </h2>

            <p className='mt-2 text-sm'> {data.description} </p>

            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
            </div>


        </div>

    )
}

export default AcceptedTask