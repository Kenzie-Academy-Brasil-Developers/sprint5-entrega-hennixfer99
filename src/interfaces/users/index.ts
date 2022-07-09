export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    age: number;
}
export interface IUserCreate {
    name: string;
    email: string;
    password: string;
    age: number;
}
export interface IUserLogin{
    email: string;
    password: string;
}

export interface IUserListOne{
    authorization?: string;
}