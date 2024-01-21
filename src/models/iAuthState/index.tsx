export interface IAuthState {
    success?: boolean,
    loading: boolean,
    userInfo: null,
    accessToken?: string | null,
    refreshToken?:  string | null,
    error?: null | string,
    isSaveChnages: boolean;

}
export interface ITask {
    title: string;
    description: string;
    dueDate:string;
    status: string;
    data:[];
    id:number
  }
  
  export interface ITaskState{
    tasks:  ITask[],
    loading: boolean,
    error: unknown
    singleTask: any,
  }
   enum Token {
    accessToken = "accessToken",
    refreshToken = "refreshToken",
  }

  export { Token }


  export interface IDeleteModal {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
  }