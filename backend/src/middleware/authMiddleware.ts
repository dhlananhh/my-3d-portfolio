// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma'; // Dùng để lấy thông tin user nếu cần

// Mở rộng interface Request của Express để có thể thêm thông tin user
export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string; // Giả sử model User của bạn có trường role (ví dụ: 'ADMIN', 'USER')
    // Thêm các trường khác nếu bạn muốn attach vào request (ví dụ: username)
  };
}

const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'Unauthorized: No token provided or token format is incorrect.',
    });
  }

  const token = authHeader.split(' ')[ 1 ];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token not found after Bearer.' });
  }

  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error('JWT_SECRET is not defined in environment variables.');
      return res.status(500).json({ message: 'Internal Server Error: JWT secret missing.' });
    }

    // Xác minh token
    const decoded = jwt.verify(token, jwtSecret) as { userId: string; role?: string;[ key: string ]: any };
    // payload của token khi tạo thường chứa userId và có thể cả role

    // (Tùy chọn) Lấy thông tin user từ database để đảm bảo user vẫn tồn tại và còn active
    // Điều này sẽ làm tăng thêm một query DB cho mỗi request được bảo vệ
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, role: true } // Chỉ lấy các trường cần thiết
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found or token invalid." });
    }

    // Gắn thông tin user (hoặc chỉ decoded payload) vào đối tượng request
    // req.user = decoded; // Nếu bạn không query DB và tin tưởng payload
    req.user = { id: user.id, role: user.role }; // Nếu bạn query DB và user có trường 'role'

    // (Tùy chọn nâng cao) Kiểm tra role cụ thể ở đây nếu middleware này chỉ dành cho một role
    // Ví dụ: nếu chỉ cho admin
    // if (user.role !== 'ADMIN') {
    //   return res.status(403).json({ message: 'Forbidden: Insufficient permissions.' });
    // }

    next(); // Token hợp lệ, cho phép request tiếp tục
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Unauthorized: Token has expired.' });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token.' });
    }
    console.error('Authentication error:', error);
    return res.status(500).json({ message: 'Internal Server Error during authentication.' });
  }
};

export default authMiddleware;


// (Tùy chọn) Một middleware khác để kiểm tra role cụ thể sau khi đã xác thực
export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: 'Forbidden: User role not available.' });
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Forbidden: Role "${req.user.role}" is not authorized to access this resource.`,
      });
    }
    next(); // Role hợp lệ
  };
};
