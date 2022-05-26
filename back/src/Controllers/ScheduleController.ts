import * as express from "express";
import { Schedule } from "../Classes/Schedule";
import { ErrorHandler } from "../ErrorHandler";
import { Request } from "../Middleware/middleware";

export class ScheduleController {
    public static schedulePost(req: Request, res: express.Response) {
        try {
            const employeeId: number = req.body.employee;
            const employeeElem = req.db.findElement(employeeId, req.db.employees);
            const employeeIndex = req.db.employees.indexOf(employeeElem);

            const schedule: Schedule = new Schedule(ErrorHandler.scheduleHandler(req.body, req.db.employees[employeeIndex].schedule), req.db.schedulesID++);
            req.db.scheduleCreate(schedule);
        } catch (err) {
            res.status(400).json("Erro ao adicionar agenda: " + err.message);
        }
        res.json("Agenda adicionada com sucesso.");
    }

    public static scheduleUpdate(req: Request, res: express.Response) {
        try {
            const scheduleId: number = Math.abs(parseInt(req.params.id, 10));
            ErrorHandler.idExists(scheduleId, req.db.schedules);

            const employeeId = req.body.employee;
            const employeeElem = req.db.findElement(employeeId, req.db.employees);
            const employeeIndex = req.db.employees.indexOf(employeeElem);

            const schedule: Schedule = new Schedule(ErrorHandler.scheduleHandler(req.body, req.db.employees[employeeIndex].schedule), scheduleId);
            req.db.scheduleUpdate(scheduleId, schedule);
        } catch (err) {
            res.status(400).json("Erro ao atualizar agenda: " + err.message);
        }
        res.json("Agenda atualizada com sucesso.");
    }

    public static scheduleRemove(req: Request, res: express.Response) {
        try {
            const scheduleId: number = Math.abs(parseInt(req.params.id, 10));
            ErrorHandler.idExists(scheduleId, req.db.schedules);
            req.db.scheduleRemove(scheduleId);
        } catch (err) {
            res.status(400).json("Erro ao remover agenda: " + err.message);
        }
        res.json("Agenda removida com sucesso.");
    }

    public static scheduleGet(req: Request, res: express.Response) {
        let schedules;
        try {
            schedules = req.db.scheduleGet();
        } catch (err) {
            res.status(400).json("Erro ao exibir agenda: " + err.message);
        }
        res.json(schedules);
    }

}
