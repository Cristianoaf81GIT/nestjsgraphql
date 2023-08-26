import {Query, Resolver} from '@nestjs/graphql';

export class UserResolver {

  @Query('users') 
  async users() {
    
  }
}
