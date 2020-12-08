import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users/user.entity";
import {UserModule} from "./users/user.module";

@Module({
    imports: [UserModule, TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres_password',
        database: 'postgres',
        synchronize: true,
        entities: [User]
    })],
})
export class AppModule {
}