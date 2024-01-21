export  interface IAddTask {
    reset: object 
    level: string
    description: string 
    title: string 
    type?: string | boolean | null
    name: string | null
    placeholder: string | null
    value: number | null
    text: string | null
    register: object | null
    dueDate:string 
    status: string
    token:string
    id:number
    data: []
}
export interface ITask {
  createdAt: string;
  description: string;
  dueDate: string;
  id: number;
  status: string;
  title: string;
  updatedAt: string;
  userId: number;
}