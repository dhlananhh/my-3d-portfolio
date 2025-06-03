import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const { featured } = req.query;
    let projects;

    if (featured === 'true') {
      projects = await prisma.project.findMany({
        where: { isFeatured: true },
        orderBy: { order: 'asc' },
      });
    } else {
      projects = await prisma.project.findMany({
        orderBy: [ { isFeatured: 'desc' }, { order: 'asc' }, { createdAt: 'desc' } ],
      });
    }
    res.status(200).json(projects);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: "Error fetching projects", error: e.message });
  }
};

export const getProjectBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const project = await prisma.project.findUnique({
      where: { slug },
    });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: "Error fetching project", error: e.message });
  }
};

// --- Admin/CMS specific (Tùy chọn - cần thêm authentication/authorization) ---
export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await prisma.project.create({
      data: req.body,
    });
    res.status(201).json(project);
  } catch (error) {
    const e = error as Error;
    // Check for unique constraint violation for slug/title
    if ((e as any).code === 'P2002') { // Prisma specific error code for unique constraint
      return res.status(409).json({ message: "Project with this title or slug already exists.", error: e.message });
    }
    res.status(500).json({ message: "Error creating project", error: e.message });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const project = await prisma.project.update({
      where: { id },
      data: req.body,
    });
    res.status(200).json(project);
  } catch (error) {
    const e = error as Error;
    if ((e as any).code === 'P2025') { // Prisma: Record to update not found
      return res.status(404).json({ message: "Project not found for update." });
    }
    res.status(500).json({ message: "Error updating project", error: e.message });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.project.delete({
      where: { id },
    });
    res.status(204).send(); // No content
  } catch (error) {
    const e = error as Error;
    if ((e as any).code === 'P2025') { // Prisma: Record to delete not found
      return res.status(404).json({ message: "Project not found for deletion." });
    }
    res.status(500).json({ message: "Error deleting project", error: e.message });
  }
};
