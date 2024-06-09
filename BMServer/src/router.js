import { Router } from "express";
import { sendBulkMail, sendSingleMail } from "./controller.js";
const router = Router();


router.post('/send/bulk', sendBulkMail)

router.post('/send/single', sendSingleMail)

export default router;