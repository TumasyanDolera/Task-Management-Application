
export interface IForm{
    firstName: string
    lastName: string
    email:string
    password?: number | string
    confirmPassword?: number | string
    type?: string | boolean
    name: string
    placeholder: string 
    value: number
    text: string
    register: object
    errormessages:string
    userId:string
}

export interface IChangeUser {
    newEmail?: string;
    firstName?: string;
    lastName?: string;
  }