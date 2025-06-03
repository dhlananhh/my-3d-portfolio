// src/controllers/skillController.ts
import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { SkillCategory } from '@prisma/client'; // Import enum nếu cần validate

// GET all skills
export const getAllSkills = async (req: Request, res: Response) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: [ { category: 'asc' }, { level: 'desc' } ],
    });
    res.status(200).json(skills);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: "Error fetching skills", error: e.message });
  }
};

// GET skill by ID (Thường không cần cho hiển thị portfolio, nhưng hữu ích cho CMS)
export const getSkillById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const skill = await prisma.skill.findUnique({
      where: { id },
    });
    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }
    res.status(200).json(skill);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: "Error fetching skill", error: e.message });
  }
};

// POST create a new skill (Admin/CMS)
export const createSkill = async (req: Request, res: Response) => {
  const { name, level, category, icon } = req.body;
  try {
    // Validate category if it's an enum
    if (!Object.values(SkillCategory).includes(category as SkillCategory)) {
      return res.status(400).json({ message: "Invalid skill category" });
    }

    const skill = await prisma.skill.create({
      data: {
        name,
        level: parseInt(level, 10), // Ensure level is an integer
        category: category as SkillCategory,
        icon,
      },
    });
    res.status(201).json(skill);
  } catch (error) {
    const e = error as Error;
    if ((e as any).code === 'P2002') { // Unique constraint violation
      return res.status(409).json({ message: `Skill with name "${name}" already exists.`, error: e.message });
    }
    res.status(500).json({ message: "Error creating skill", error: e.message });
  }
};

// PUT update a skill (Admin/CMS)
export const updateSkill = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, level, category, icon } = req.body;
  try {
    // Validate category if it's an enum and provided
    if (category && !Object.values(SkillCategory).includes(category as SkillCategory)) {
      return res.status(400).json({ message: "Invalid skill category" });
    }

    const skill = await prisma.skill.update({
      where: { id },
      data: {
        name,
        level: level ? parseInt(level, 10) : undefined,
        category: category ? category as SkillCategory : undefined,
        icon,
      },
    });
    res.status(200).json(skill);
  } catch (error) {
    const e = error as Error;
    if ((e as any).code === 'P2025') { // Record to update not found
      return res.status(404).json({ message: "Skill not found for update." });
    }
    if ((e as any).code === 'P2002' && (e as any).meta?.target?.includes('name')) {
      return res.status(409).json({ message: `Another skill with name "${name}" already exists.`, error: e.message });
    }
    res.status(500).json({ message: "Error updating skill", error: e.message });
  }
};

// DELETE a skill (Admin/CMS)
export const deleteSkill = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.skill.delete({
      where: { id },
    });
    res.status(204).send(); // No content
  } catch (error) {
    const e = error as Error;
    if ((e as any).code === 'P2025') { // Record to delete not found
      return res.status(404).json({ message: "Skill not found for deletion." });
    }
    res.status(500).json({ message: "Error deleting skill", error: e.message });
  }
};
