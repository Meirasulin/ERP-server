import express, { Request, Response } from "express";
import internalRouter from "../internalRequests/router/internalReqRouter";
const router = express.Router();

router.use("/api/inventory", internalRouter);

router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Page not found!")
);

export default router;
