//@ Author: B00981839-Krutik Kulkarni
// Author: Jay Patel

import express from "express";
import authRoutes from "./routers/login/authRoutes";
import userRoutes from "./routers/login/userRoutes";
import repoRoutes from "./routers/repo/repoRoutes";
import developersRoutes from "./routers/find-developer/developersRoutes";
import listedProjectsRoutes from "./routers/user Projects/listedProjectsRoutes";
import contributedProjectsRoutes from "./routers/user Projects/contributedProjectsRoutes";
import chatRoutes from "./routers/chat/chatRoutes";
import profileRoutes from "./routers/profile/profileRoutes";
import invitationRoutes from "./routers/invitation/invitationRoutes";
import createAddUserToProjectRouter from './routers/addUserToProject/addUserToProjectRoutes';
import developerRequestRoutes from './routers/developerRequest/DeveloperRequestRoutes'; // Import the developer request routes

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/repo", repoRoutes);
router.use("/find-developers", developersRoutes);
router.use("/listedProjects", listedProjectsRoutes);
router.use("/contributedProjects", contributedProjectsRoutes);
router.use("/chat", chatRoutes);
router.use("/profile", profileRoutes);
router.use("/invitation", invitationRoutes);
router.use("/addUserToProject", createAddUserToProjectRouter)
router.use("/join-project", developerRequestRoutes); // Add this line

export default router;
