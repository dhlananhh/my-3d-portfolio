// src/routes/skillRoutes.ts
import { Router } from 'express';
import {
  getAllSkills,
  getSkillById,    // Admin/CMS
  createSkill,     // Admin/CMS
  updateSkill,     // Admin/CMS
  deleteSkill      // Admin/CMS
} from '../controllers/skillController';
// import { adminAuthMiddleware } from '../middleware/authMiddleware'; // TODO: Implement

const router = Router();

router.get('/', getAllSkills);

// Routes cho Admin/CMS - cần bảo vệ bằng middleware xác thực
router.get('/:id', /* adminAuthMiddleware, */ getSkillById);
router.post('/', /* adminAuthMiddleware, */ createSkill);
router.put('/:id', /* adminAuthMiddleware, */ updateSkill);
router.delete('/:id', /* adminAuthMiddleware, */ deleteSkill);

export default router;
