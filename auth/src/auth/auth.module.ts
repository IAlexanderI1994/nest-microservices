import {AuthService} from "./auth.service";
import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";
import {LocalStrategy} from "./local.strategy";
import constants from "./constants";

@Module({
    imports: [ClientsModule.register([{
        name: 'USER_CLIENT',
        transport: Transport.TCP,
        options: {
            host: 'localhost',
            port: 4010,
        }
    }]), JwtModule.register({
        secret: constants.jwtSecret,
        signOptions: {expiresIn: '60s'}
    })],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {
}