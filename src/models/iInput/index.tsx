
export interface IInput {
  type: string,
  placeholder: string,
  value?: string | number | object | undefined | null,
  register: object
  size: string
}
export interface IPostTask {
  title: string;
  description: string;
  dueDate: string;
  status: string
  element: string
  id: any
}
export interface IAddTask {
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

export interface IUpdateTask {
  id: number;
  task: IAddTask;
  edetedId: null
}

export interface IDeleteTask {
  id: number
}
export interface IEditModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  task: {
    id:number;
    title: string;
    description: string;
    dueDate: string;
    status: string;
  } | null;
}
