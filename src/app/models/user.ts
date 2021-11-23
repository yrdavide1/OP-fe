import { Person } from "./person";

export class User extends Person{
    gender: string = "";
    firstname: string = "";
    lastname: string = "";
    dateOfBirth: string = "";
    address: string = "";
    city: string = "";
    email: string = "";
    phoneNumber: string = "";
    closet: any;
    ticket: any;
    reports: any;
}