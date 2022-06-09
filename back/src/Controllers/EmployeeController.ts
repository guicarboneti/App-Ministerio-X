import * as express from "express";
import { Employee } from "../Classes/Employee";
import { ErrorHandler } from "../ErrorHandler";
import { Request } from "../Middleware/middleware";

export class EmployeeController {
    public static employeePost(req: Request, res: express.Response) {
        try {
            const employee: Employee = new Employee(ErrorHandler.employeeHandler(req.body, req.db.employees), req.db.employeesID++);
            req.db.employeeCreate(employee);
            // res.status(200).json("Deu buena: " + JSON.stringify(employee.schedule["mon"]));
        } catch (err) {
            res.status(400).json("Erro ao adicionar funcionario: " + err.message);
        }
        res.json("Funcionário adicionado com sucesso.");
    }

    public static employeeUpdate(req: Request, res: express.Response) {
        try {
            const employeeId: number = Math.abs(parseInt(req.params.id, 10));
            ErrorHandler.idExists(employeeId, req.db.employees);

            const employee: Employee = new Employee(ErrorHandler.employeeHandler(req.body, req.db.employees), employeeId);
            req.db.employeeUpdate(employeeId, employee);
        } catch (err) {
            res.status(400).json({ msg: "Erro ao atualizar funcionario: " + err.message + " res.body:" + req.body.id });
        }
        res.json("Funcionário atualizado com sucesso.");
    }

    public static employeeRemove(req: Request, res: express.Response) {
        try {
            const employeeId: number = Math.abs(parseInt(req.params.id, 10));
            ErrorHandler.idExists(employeeId, req.db.employees);
            req.db.employeeRemove(employeeId);
        } catch (err) {
            res.status(400).json("Erro ao remover funcionario: " + err.message);
        }
        res.json("Funcionário removido com sucesso.");
    }

    public static employeeGet(req: Request, res: express.Response) {
        let employees;
        try {
            employees = req.db.employeeGet();
        } catch (err) {
            res.status(400).json("Erro ao exibir funcionarios: " + err.message);
        }
        res.json(employees);
    }
}
