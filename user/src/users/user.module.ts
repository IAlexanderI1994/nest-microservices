import {TypeOrmModule} from "@nestjs/typeorm";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {User} from "./user.entity";
import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        ClientsModule.register([{
            name: 'AUTH_CLIENT',
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 4000
            }
        }])
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {
}