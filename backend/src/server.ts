// src/server.ts
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import projectRoutes from './routes/projectRoutes';
import skillRoutes from './routes/skillRoutes';
import testimonialRoutes from './routes/testimonialRoutes';
import contactRoutes from './routes/contactRoutes'; // Sẽ tạo route này

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// --- Middlewares ---
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Cho phép frontend truy cập
  optionsSuccessStatus: 200
}));
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies


// --- API Routes ---
app.get('/', (req: Request, res: Response) => {
  res.send('3D Portfolio Backend API is running!');
});

app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes); // Route cho contact form

// --- Error Handling Middleware (Basic) ---
// Nên đặt sau tất cả các routes
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!', error: err.message });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
