"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const table_controller_1 = require("../controllers/table-controller");
const validate_table_1 = require("../middleware/validate-table");
const tableRouter = (0, express_1.Router)();
tableRouter.get("/:tableId", table_controller_1.readTable);
tableRouter.get("/", table_controller_1.getTableStat);
tableRouter.post("/", validate_table_1.validateNewTable, table_controller_1.createTable);
tableRouter.patch("/:tableId", validate_table_1.validateTableUpdate, table_controller_1.updateTable);
tableRouter.delete("/:tableId", table_controller_1.deleteTable);
exports.default = tableRouter;
