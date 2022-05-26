#!/usr/bin/env node

import * as express from "express";
import { EmployeeController } from "./Controllers/EmployeeController";
import { ScheduleController } from "./Controllers/ScheduleController";
import { DBHandlerMw } from "./Middleware/middleware";

const app = (module.exports = express());
const cors = require('cors');

app.use("/", express.json());
app.use("/", DBHandlerMw() as express.RequestHandler);
app.use(cors());

app.post('/employees', EmployeeController.employeePost);
app.put('/employees/:id', EmployeeController.employeeUpdate);
app.delete('/employees/:id', EmployeeController.employeeRemove);
app.get('/employees', EmployeeController.employeeGet);

app.post('/schedule', ScheduleController.schedulePost);
app.put('/schedule/:id', ScheduleController.scheduleUpdate);
app.delete('/schedule/:id', ScheduleController.scheduleRemove);
app.get('/schedule', ScheduleController.scheduleGet);

app.listen(3000);
console.log("Server listening on port 3000");
