// src/controllers/testimonialController.ts
import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// GET all testimonials
export const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(testimonials);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: "Error fetching testimonials", error: e.message });
  }
};

// GET testimonial by ID (Admin/CMS)
export const getTestimonialById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const testimonial = await prisma.testimonial.findUnique({
      where: { id }
    });
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: "Error fetching testimonial", error: e.message });
  }
};

// POST create a new testimonial (Admin/CMS)
export const createTestimonial = async (req: Request, res: Response) => {
  const { quote, author, authorCompany, authorAvatar /*, projectId */ } = req.body;
  try {
    if (!quote || !author) {
      return res.status(400).json({ message: "Quote and Author are required." });
    }
    const testimonial = await prisma.testimonial.create({
      data: {
        quote,
        author,
        authorCompany,
        authorAvatar,
        // projectId: projectId || undefined, // Nếu có liên kết project
      },
    });
    res.status(201).json(testimonial);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: "Error creating testimonial", error: e.message });
  }
};

// PUT update a testimonial (Admin/CMS)
export const updateTestimonial = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quote, author, authorCompany, authorAvatar /*, projectId */ } = req.body;
  try {
    const testimonial = await prisma.testimonial.update({
      where: { id },
      data: {
        quote,
        author,
        authorCompany,
        authorAvatar,
        // projectId: projectId || undefined,
      },
    });
    res.status(200).json(testimonial);
  } catch (error) {
    const e = error as Error;
    if ((e as any).code === 'P2025') { // Record to update not found
      return res.status(404).json({ message: "Testimonial not found for update." });
    }
    res.status(500).json({ message: "Error updating testimonial", error: e.message });
  }
};

// DELETE a testimonial (Admin/CMS)
export const deleteTestimonial = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.testimonial.delete({
      where: { id },
    });
    res.status(204).send(); // No content
  } catch (error) {
    const e = error as Error;
    if ((e as any).code === 'P2025') { // Record to delete not found
      return res.status(404).json({ message: "Testimonial not found for deletion." });
    }
    res.status(500).json({ message: "Error deleting testimonial", error: e.message });
  }
};
