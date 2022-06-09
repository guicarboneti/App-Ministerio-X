import { Schedule } from "./Schedule";

export interface EmployeeInfo {

    id?: number;
    name: string;
    surname: string;
    photo: string;
    phone: string;
    email: string;
    job: string;
    extension: string;
    schedule: Schedule[];
    begin: any[];
    finish: any[];
}

export class Employee {

    public readonly id?: number;
    public readonly name: string;
    public readonly surname: string;
    public readonly photo: string;
    public readonly phone: string;
    public readonly email: string;
    public readonly job: string;
    public readonly extension: string;
    public readonly schedule: Schedule[];
    public readonly begin: any[];
    public readonly finish: any[];

    constructor(ei: EmployeeInfo, id: number) {
        this.id = id;
        this.name = ei.name;
        this.surname = ei.surname;
        this.photo = ei.photo;
        this.phone = ei.phone;
        this.email = ei.email;
        this.job = ei.job;
        this.extension = ei.extension;
        this.schedule = ei.schedule;
        this.begin = ei.begin;
        this.finish = ei.finish;
    }
}

