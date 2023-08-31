import {Query, Resolver} from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {

  constructor(
    private readonly user: UserService
  ) {}

  @Query('users') 
  async users() {    
    return this.user.getUsers();
  }
}
