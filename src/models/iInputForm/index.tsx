import { IAddTask } from ".."

export interface IMolecul {

    type: string
    placeholder: string
    value?: string | number | object | null
    text: string
    register: object
    size: string
}

interface IUser {
    id: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    tasks: IAddTask[];
    imageId: number;
    file: {
      id: number;
      createdAt: string;
      updatedAt: string;
      imagePath: string;
    };
  }

export interface IUserRedux{
    user: null | IUser 
    loading: boolean
    error?: string | undefined | null
}
