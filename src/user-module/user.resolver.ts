import {Query, Resolver, Mutation, Args} from '@nestjs/graphql';
import {UserService} from './user.service';
import {CreateUserInput} from '../graphql';

@Resolver()
export class UserResolver {
  constructor(
    private readonly user: UserService
  ) {}

  @Query('users') 
  async users() {    
    return this.user.getUsers();
  }

  @Mutation('createUser')
  async createUser(@Args('data') input: CreateUserInput) {
    return this.user.createUser(input); 
  }
}
