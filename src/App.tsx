import {} from "./components/User";
import './App.css';
import { ChangeEvent, useState } from "react";
import { Todotask } from "./components/Todotask";
import { IAddUser } from "./Interface/IAddUser";
function App() {

  
  const [task, setTask] = useState<string>("");
  const [deadline,setDeadline] = useState<number>(0);

  const [todoList, setTodoList] = useState<IAddUser[]>([]);

  const handleChange = (e:ChangeEvent<HTMLInputElement>): void => {
    if(e.target.name==="task"){

      setTask(e.target.value);
      console.log({task});
    }
    else
      setDeadline(Number(e.target.value))
  }

  const addTask = ():void => {
    const currTask:IAddUser = {
      id: todoList.length===0?1:todoList[todoList.length-1].id+1,
      taskName: task,
      deadline: deadline
    }
    setTodoList([...todoList,currTask])
    console.log({todoList})
  }


  // const completeTask = (taskToDelete:string):void => {
  //     setTodoList(todoList.filter((task)=>{
  //         return task.taskName !==taskToDelete;
  //     }))
  // } 
  const completeTask = (taskToDeleteId:number):void => {
      setTodoList(todoList.filter((task)=>{
          return task.id !==taskToDeleteId;
      }))
  } 

  return (
    <div className="App">
      <div className="inputContainer">
        <input type="text" placeholder="task" name="task" onChange={handleChange}  value={task}/>
        <input type="number" placeholder="deadline" name="deadline" onChange={handleChange} value={deadline}/>
      </div>
      <div className="taskBtn">
          <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {todoList.map((task:IAddUser ,key:number)=>{
             return <Todotask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
