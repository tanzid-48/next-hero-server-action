import { postTask } from "@/lib/tasks";
import { revalidatePath } from "next/cache";

 export const cerateATask =  async(formData) => {
   'use server' 

//   const title = formData.get("title");
//   const description = formData.get("description");
//   const status = formData.get("status");
//   const priority = formData.get("priority");
//   const dueDate = formData.get("dueDate");

//    const newTask = {
//     title,
//     description,
//     status,
//     priority,
//     dueDate,
//   };

const newTask = Object.fromEntries(formData);
console.log(newTask);

  const res =await postTask(newTask);
   if(res.ok){
    revalidatePath('/task')
   }
  return res;
}