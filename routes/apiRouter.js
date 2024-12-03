import express from "express";
const Router = express.Router();

import Employees from "./EmployeeRoutes";

Router.use("/api", Employees);

export default Router;
