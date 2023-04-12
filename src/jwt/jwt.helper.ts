/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export default class JwtHelper {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(payload: any, expiresIn: string) {
    
    const options = {expiresIn: expiresIn};
    const token = this.jwtService.sign(payload, options);
    
    return token;
  }

  verifyToken(token: string) {
    // Verify Token
    return this.jwtService.verify(token);
  }
}
