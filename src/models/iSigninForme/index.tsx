export interface ISignInForm{
    firstName: string
    lastName: string
    email:string
    password?: number | string
    confirmPassword?: number | string
    type?: string | boolean |'submit' | 'reset' | 'button' | undefined;
    name: string
    placeholder: string 
    value?: string | ReadonlyArray<string> | number | undefined;
    text: string
    register: object
    errormessages:string
    size:string
    currentPassword: string,
    

}