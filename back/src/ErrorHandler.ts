import { EmployeeInfo } from "./Classes/Employee";
import { ScheduleInfo } from "./Classes/Schedule";
import { Request } from "./Middleware/middleware";

var isUpdate = false;

export class ErrorHandler {

    public static idExists(id: number, array: any[]): void {
        if (!(array.find(elem => elem.id == id)))
            throw new Error("Element with id " + id + " does not exist");
        isUpdate = true;
    }

    public static scheduleHandler(input: any, employeeSchedules: any[]): ScheduleInfo {
        if (typeof input.employee !== "number")
            throw new Error("Invalid schedule employee");

        if ((!isUpdate) && (employeeSchedules.find(elem => elem.id == input.id)))
            throw new Error("Schedule already exists");

        const schedule: ScheduleInfo = {
            employee: input.employee,
            mon: input.mon,
            tue: input.tue,
            wed: input.wed,
            thu: input.thu,
            fri: input.fri
        }

        isUpdate = false;
        return schedule;
    }

    public static employeeHandler(input: any, employees: any[]): EmployeeInfo {
        if (typeof input.name !== "string" || !input.name.length)
            throw new Error("Invalid employee name");

        if (!input.schedule)
            throw new Error("Invalid schedule");

        const employee: EmployeeInfo = {
            name: input.name,
            surname: input.surname,
            photo: input.photo,
            phone: input.phone,
            email: input.email,
            extension: input.extension,
            job: input.job,
            schedule: input.schedule,
            begin: input.begin,
            finish: input.finish
        }

        isUpdate = false;
        return employee;
    }
}
