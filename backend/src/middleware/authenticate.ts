import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

interface CustomJwtPayload {
  role: string;
  iat: number;
  exp: number;
}

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }

    try {
      const decoded = jwt.decode(token) as CustomJwtPayload;
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized access' });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: `Invalid token ${error}` });
    }
  }
}
