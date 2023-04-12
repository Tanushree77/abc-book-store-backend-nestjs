/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import JwtHelper from "../../jwt/jwt.helper";

@Injectable()
export class UsersMiddleware implements NestMiddleware {
    constructor( private readonly jwtHelper: JwtHelper,) { }
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const bearerToken = req.headers.authorization;
            const bearer = 'Bearer ';
            if (!bearerToken || !bearerToken.startsWith(bearer)) {
                res.status(401).send({ message: 'Invalid Token' });
            }
            const token = bearerToken.replace(bearer, '');
            const jwtPayload = this.jwtHelper.verifyToken(token);
            return next()

        } catch (error) {
            res.status(401).send({ message: 'No token provided' });
        }
    }
}