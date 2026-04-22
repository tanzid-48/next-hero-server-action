// import { Card } from '@heroui/react';
// import React from 'react';

// const TasksCard = ({task}) => {
//     const {title,description,status,priority,dueDate}= task;
//     return (
//        <>
//         <div>
//             <Card className="w-[320px]" variant="secondary">
//         <Card.Header>
//           <Card.Title>{title}</Card.Title>
//           <Card.Description>{description}</Card.Description>
//         </Card.Header>
//         <Card.Content>
//           <p>{status}</p>
//         </Card.Content>
//       </Card>
//         </div>  
       
//        </>
//     );
// };

// export default TasksCard;


import { Card, CardHeader,  CardFooter } from "@heroui/react";
import React from "react";
import AddTask from "./AddTask";
import { cerateATask } from "@/app/lib/actions";

const TasksCard = ({ task }) => {
  const { title, description, status, priority, dueDate } = task;

  return (
    <Card className="max-w-[320px] shadow-md hover:shadow-xl transition p-3 bg-gray-700">
      
      {/* Header */}
      <CardHeader className="flex flex-col items-start gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </CardHeader>

      {/* Body */}
      <Card className="text-sm space-y-1 bg-green-200">
        <p>
          Status:{" "}
          <span className="font-medium capitalize">{status}</span>
        </p>

        <p>
          Priority:{" "}
          <span
            className={`font-medium ${
              priority === "high"
                ? "text-red-500"
                : priority === "medium"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {priority}
          </span>
        </p>

        <p>
          Due: <span className="font-medium">{dueDate}</span>
        </p>
      </Card>

      {/* Footer */}
      <CardFooter className="flex justify-between mt-2">
        <span className="px-3 py-1 rounded hover:bg-blue-600">
          <AddTask cerateATask = {cerateATask}></AddTask>
        </span>

        <div className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </div>
      </CardFooter>
    </Card>
  );
};

export default TasksCard;