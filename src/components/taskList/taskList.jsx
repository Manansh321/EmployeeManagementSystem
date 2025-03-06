import React from 'react'
import AcceptedTask from './acceptTasklist'
import NewTask from './newTask'
import CompletedTask from './completeTask'
import FailedTask from './failedTask'

const TaskList = ({ data }) => {
    // console.log(data);
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto  flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10  '>

            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptedTask key={idx}  data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem}/>
                } 
                if (elem.completed) {
                    return <CompletedTask key={idx} data={elem}/>
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem}/>
                }
            })}

        </div>
    )
}

export default TaskList