import express from "express";
import { register } from "../../Controllers/auth/authcontroller.js";
const router= express.router();
router.post ('/register',register);
export default router;