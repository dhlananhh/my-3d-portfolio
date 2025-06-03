// src/routes/contactRoutes.ts
import { Router } from 'express';
import {
  submitContactForm,
  getAllMessages,          // Admin/CMS
  getMessageById,          // Admin/CMS
  toggleMessageReadStatus, // Admin/CMS
  deleteMessage            // Admin/CMS
} from '../controllers/contactController';
// import { adminAuthMiddleware } from '../middleware/authMiddleware'; // TODO: Implement

const router = Router();

router.post('/', submitContactForm); // Public route

// Routes cho Admin/CMS
router.get('/', /* adminAuthMiddleware, */ getAllMessages);
router.get('/:id', /* adminAuthMiddleware, */ getMessageById);
router.put('/:id/read', /* adminAuthMiddleware, */ toggleMessageReadStatus);
router.delete('/:id', /* adminAuthMiddleware, */ deleteMessage);


export default router;
