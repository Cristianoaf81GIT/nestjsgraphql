import {Injectable, Logger} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import { User } from 'src/graphql';

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
}


