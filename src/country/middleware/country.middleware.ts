import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import JwtHelper from "../../jwt/jwt.helper";

export class CountryMiddleware implements NestMiddleware {
    constructor( private readonly jwtHelper: JwtHelper,) { }
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const bearerToken = req.headers.authorization;
            const bearer = 'Bearer ';
            if (!bearerToken || !bearerToken.startsWith(bearer)) {
                return false;
            }
            const token = bearerToken.replace(bearer, '');
            const jwtPayload = this.jwtHelper.verifyToken(token);
            return next()

        } catch (error) {
            return error;
        }
    }
}