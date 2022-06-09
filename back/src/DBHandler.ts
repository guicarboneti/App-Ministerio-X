import { Schedule } from "./Classes/Schedule";
import { Employee } from "./Classes/Employee";

export class DBHandler {

    employeesID: number = 0;
    schedulesID: number = 0;

    employees: Employee[];
    schedules: Schedule[];

    constructor() {
        this.employees = [];
        this.schedules =[];
        this.startArrays();
    }

    private startArrays() {

        const defaultSchedule: Schedule = new Schedule({
            mon: [],
            tue: [],
            wed: [],
            thu: [],
            fri: [],
            employee: 0
        }, this.schedulesID++);

        const defaultEmployee: Employee = new Employee({
            name: "Sidcley",
            surname: "Emanuel",
            photo: "1.png",
            phone: "41 997748684",
            email: "sid@ema.com",
            job: "dono das prateleiras Sid",
            extension: "123",
            schedule: [defaultSchedule],
            begin: [{"mon": "07h57", "tue": "07h36", "wed": "08h02", "thu": "07h59", "fri": "08h00"}],
            finish: [{"mon": "18h30", "tue": "18h00", "wed": "18h03", "thu": "18h02", "fri": "17h55"}]
        }, this.employeesID++);

        this.employees.push(defaultEmployee);
        this.schedules.push(defaultSchedule);
    }

    findElement(elemId: number, array: any[]): any {
        return array.find(target => target.id == elemId);
    }

    /**
     * Insere um funcionario no banco
     * @param newEmployee Objeto Employee a ser inserido
     */
    employeeCreate(newEmployee: Employee) {
        this.employees.push(newEmployee);

        const newSchedule: Schedule = new Schedule({
            employee: newEmployee.id,
            mon: newEmployee.schedule["mon"],
            tue: newEmployee.schedule["tue"],
            wed: newEmployee.schedule["wed"],
            thu: newEmployee.schedule["thu"],
            fri: newEmployee.schedule["fri"]
        }, this.schedulesID++);

        this.scheduleCreate(newSchedule);
    }

    /**
     * Atualiza um funcionario do banco
     * @param id Id do funcionario a ser atualizado
     * @param employee objeto Employee a ser inserido
     */
    employeeUpdate(employeeId: number, newEmployee: Employee) {
        const employeeElem = this.findElement(employeeId, this.employees);
        const employeeIndex = this.employees.indexOf(employeeElem);

        this.employees.splice(employeeIndex, 1, newEmployee);

        const scheduleElem = this.schedules.find(target => target.employee == employeeElem.id);
        const scheduleIndex = this.schedules.indexOf(scheduleElem);
        Object.assign(this.schedules[scheduleIndex], newEmployee.schedule);
    }

    /**
     * 
     * @param employeeId Id do funcionario a ser removido
     */
    employeeRemove(employeeId: number) {

        const elem = this.findElement(employeeId, this.employees);
        const index = this.employees.indexOf(elem);

        this.employees.splice(index, 1);

        const scheduleElem = this.schedules.find(target => target.employee == elem.id);
        const scheduleIndex = this.schedules.indexOf(scheduleElem);
        this.schedules.splice(scheduleIndex, 1);
    }

    /**
     * 
     * @returns Array com todos os funcionarios
     */
    employeeGet() {
        return this.employees;
    }

    /**
     * Insere uma agenda no banco
     * @param schedule Objeto Schedule a ser inserido
     * @param employeeId Indice do funcionario no qual a agenda sera inserida
     */
    scheduleCreate(schedule: Schedule) {
        this.schedules.push(schedule);
    }

    /**
     * Atualiza uma agenda do banco
     * @param id Id da agenda a ser atualizado
     * @param schedule Objeto Schedule a ser inserido
     */
    scheduleUpdate(scheduleId: number, newSchedule: Schedule) {
        const scheduleElem = this.findElement(scheduleId, this.schedules);
        const scheduleIndex = this.schedules.indexOf(scheduleElem);

        const employeeElem = this.findElement(scheduleElem.employee, this.employees);
        const employeeIndex = this.employees.indexOf(employeeElem);

        this.schedules.splice(scheduleIndex, 1, newSchedule);
        Object.assign(this.employees[employeeIndex].schedule, newSchedule);
    }

    /**
     * 
     * @param scheduleId 
     * @param employeeId 
     */
    scheduleRemove(scheduleId: number) {

        const scheduleElem = this.findElement(scheduleId, this.schedules);
        const scheduleIndex = this.schedules.indexOf(scheduleElem);

        const employeeElem = this.findElement(scheduleElem.employee, this.employees);
        const employeeIndex = this.employees.indexOf(employeeElem);

        for (var member in this.employees[employeeIndex].schedule) delete this.employees[employeeIndex].schedule[member];
        this.schedules.splice(scheduleIndex, 1);
    }

    scheduleGet() {
        return this.schedules;
    }

}
