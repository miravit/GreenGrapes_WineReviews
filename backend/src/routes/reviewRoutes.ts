import { Router } from "express";
import { createReview, getAllReviews } from "../controllers/reviewController";

const router: Router = Router();

router.post("/", createReview);

router.get("/", getAllReviews);

export default router;
