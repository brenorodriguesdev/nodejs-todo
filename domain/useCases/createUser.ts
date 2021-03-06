import { UserModel } from "../models/user";

export interface CreateUserUseCase {
    create: (user: UserModel) => Promise<UserModel | Error>
}