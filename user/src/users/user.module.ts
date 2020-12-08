import {TypeOrmModule} from "@nestjs/typeorm";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {User} from "./user.entity";
import {Module} from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {
}