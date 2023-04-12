/* eslint-disable prettier/prettier */
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";

// @Injectable()
export default class JwtConfigService implements JwtOptionsFactory {
    
    createJwtOptions(): JwtModuleOptions {
        
        console.log("data get")
        return {
            
            secret: 'mobisecntrixtest' // process.env.SECRET_JWT
        };
    }
}