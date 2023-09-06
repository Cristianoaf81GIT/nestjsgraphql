import {Query, Resolver, Mutation, Args} from '@nestjs/graphql';
import {UserService} from './user.service';
import {CreateUserInput, UpdateUserInput, User} from '../graphql';

@Resolver()
export class UserResolver {
  constructor(
    private readonly user: UserService
  ) {}

  @Query('users') 
  async users(): Promise<User[]> {    
    return this.user.getUsers();
  }

  @Mutation('createUser')
  async createUser(@Args('data') input: CreateUserInput): Promise<User> {
    return this.user.createUser(input); 
  }

  @Mutation('updateUser')
  async updateUser(@Args('data') input: UpdateUserInput): Promise<User> {
    return this.user.updateUser(input); 
  }
}
