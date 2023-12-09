import { ITask } from '@/types/tasks';
import React from 'react';
import Tasks from './Tasks';
interface ToDoListProps {
  tasks: ITask[];
}
const ToDoList:React.FC<ToDoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {tasks.map((task) => (
      <Tasks key = {task.id} task={task}/>
    ))}
    </tbody>
  </table>
</div>
  );
}

export default ToDoList;
