// src/controllers/contactController.ts
import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// POST - Submit contact form (đã có)
export const submitContactForm = async (req: Request, res: Response) => {
  // ... (code hiện tại) ...
};

// GET all messages (Admin/CMS)
export const getAllMessages = async (req: Request, res: Response) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { receivedAt: 'desc' },
    });
    res.status(200).json(messages);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: "Error fetching messages", error: e.message });
  }
};

// GET message by ID (Admin/CMS)
export const getMessageById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const message = await prisma.message.findUnique({
      where: { id }
    });
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    // (Tùy chọn) Đánh dấu đã đọc khi xem
    if (!message.isRead) {
      await prisma.message.update({
        where: { id },
        data: { isRead: true }
      });
    }
    res.status(200).json(message);
  } catch (error) {
    const e = error as Error;
    res.status(500).json({ message: "Error fetching message", error: e.message });
  }
};

// PUT mark message as read/unread (Admin/CMS)
export const toggleMessageReadStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { isRead } = req.body; // mong đợi một boolean

  if (typeof isRead !== 'boolean') {
    return res.status(400).json({ message: "isRead field must be a boolean." });
  }

  try {
    const updatedMessage = await prisma.message.update({
      where: { id },
      data: { isRead }
    });
    res.status(200).json(updatedMessage);
  } catch (error) {
    const e = error as Error;
    if ((e as any).code === 'P2025') {
      return res.status(404).json({ message: "Message not found to update." });
    }
    res.status(500).json({ message: "Error updating message read status", error: e.message });
  }
};


// DELETE a message (Admin/CMS)
export const deleteMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.message.delete({
      where: { id }
    });
    res.status(204).send();
  } catch (error) {
    const e = error as Error;
    if ((e as any).code === 'P2025') {
      return res.status(404).json({ message: "Message not found for deletion." });
    }
    res.status(500).json({ message: "Error deleting message", error: e.message });
  }
};
