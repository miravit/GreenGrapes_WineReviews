import { Router } from "express";
import { createReview, getAllReviews } from "../controllers/reviewController";
import { uploadMiddleware } from "../middlewares/MulterMiddleware";

const router: Router = Router();

router.post("/", uploadMiddleware, createReview);

router.get("/", getAllReviews);

export default router;
