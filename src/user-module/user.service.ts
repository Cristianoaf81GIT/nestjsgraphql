import {Injectable, Logger} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import { CreateUserInput, User } from '../graphql';

@Injectable()
export class UserService {

  private logger:Logger = new Logger(UserService.name);

  constructor(
    private readonly prisma: PrismaService
  ) {}


  async getUsers(): Promise<User[]> {
    this.logger.log('getUsers');
    return this.prisma.prismaUsers.findMany({});
  }

  async createUser(input: CreateUserInput): Promise<User> {
    try {
      let newData = {...input};
      return this.prisma.prismaUsers.create({data: newData});
    } catch(error) {
      this.logger.error(`createUser: ${JSON.stringify(error, null, 4)}`);
      throw error;
    }
  }
}


