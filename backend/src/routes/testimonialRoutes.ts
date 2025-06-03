// src/routes/testimonialRoutes.ts
import { Router } from 'express';
import {
  getAllTestimonials,
  getTestimonialById,    // Admin/CMS
  createTestimonial,     // Admin/CMS
  updateTestimonial,     // Admin/CMS
  deleteTestimonial      // Admin/CMS
} from '../controllers/testimonialController';
// import { adminAuthMiddleware } from '../middleware/authMiddleware'; // TODO: Implement

const router = Router();

router.get('/', getAllTestimonials);

// Routes cho Admin/CMS
router.get('/:id', /* adminAuthMiddleware, */ getTestimonialById);
router.post('/', /* adminAuthMiddleware, */ createTestimonial);
router.put('/:id', /* adminAuthMiddleware, */ updateTestimonial);
router.delete('/:id', /* adminAuthMiddleware, */ deleteTestimonial);

export default router;
