import {FindConditions, InsertResult, Repository} from "typeorm";
import {Injectable, Logger} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";

@Injectable()
export class UserService {
    @InjectRepository(User)
    private readonly userRepository: Repository<User>;

    constructor(
        @InjectRepository(User)
            userRepository: Repository<User>
    ) {
        this.userRepository = userRepository;
    }

    findOne(query: FindConditions<User>): Promise<User> {
        return this.userRepository.findOne(query);
    }

    async createUser(user: any): Promise<InsertResult> {
        try {
            const userEntity = this.userRepository.create(user);

            const res = await this.userRepository.insert(userEntity);

            Logger.log('createUser - Created user');

            return res;
        } catch (e) {
            Logger.log(e);
            throw e;
        }
    }
}