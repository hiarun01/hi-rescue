import express from "express";
import { dummy, getUserForSidebar } from "../controllers/user.controller.js";
const router = express.Router();

router.get('/', getUserForSidebar)
router.get('/dummy', dummy)

export default router