import tasks from '../data/tasks.json'
 export const getTasks = async() =>{

  return tasks;

}

export const postTask = async(newTask) => {
    newTask.id = tasks.length+1;
    // tasks.push(newTask)  // last position এ add হবে
     tasks.unshift(newTask); //  first position এ add হবে
    return {ok: true , massage:'Task added Successfully'}
}