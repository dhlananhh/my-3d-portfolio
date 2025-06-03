import { Router } from 'express';
import {
  getAllProjects,
  getProjectBySlug,
  createProject, // Cần bảo vệ
  updateProject, // Cần bảo vệ
  deleteProject  // Cần bảo vệ
} from '../controllers/projectController';

const router = Router();

router.get('/', getAllProjects);
router.get('/:slug', getProjectBySlug);

// CRUD - Routes này nên được bảo vệ bởi middleware xác thực admin
router.post('/', createProject);        // TODO: Add Admin Auth Middleware
router.put('/:id', updateProject);     // TODO: Add Admin Auth Middleware
router.delete('/:id', deleteProject);  // TODO: Add Admin Auth Middleware

export default router;
