import express from "express";
import * as adminController from "../../controllers/admin.controller";

const router = express.Router();

router.get("/staffs", adminController.getStaffs);
// router.post("/staff", adminController.postStaff, catchError);

export default router;
