import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async() => {
    const tasks = await getTasks();
    return (
        <div>
            <h2>tasks:{tasks.length}</h2>
            <div className="grid md:grid-cols-3 gap-3 items-center w-11/12 mx-auto">
                {
                    tasks.map(task => <TasksCard key={task.id} task = {task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;

