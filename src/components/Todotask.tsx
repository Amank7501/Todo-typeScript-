import React,{FC} from 'react'
import { IAddUser } from '../Interface/IAddUser';

interface Props{
  task:IAddUser;
  completeTask: (taskToDeleteId: number)=>void;
}



export const Todotask:FC<Props> = ({task, completeTask}) => {
  return (
    <div className='task-container'>

      <div className='tasks' ><b>Task Name:</b>   {task.taskName}</div>
      
      <div className='task-deadline'> <b>Deadline:</b> {task.deadline}</div>
      <button className='tasksbtn' onClick={()=>completeTask(task.id)}>X</button>
    </div>
  )
}

