import {Injectable, Logger} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import { CreateUserInput, DeleteUserInput, UpdateUserInput, User } from '../graphql';

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

  async updateUser(input: UpdateUserInput): Promise<User> {
    try {
      const updateData = {...input};
      return this.prisma.prismaUsers.update({
        where: {
          id: updateData.id
        },
        data: {
          name: updateData.name,
        },
      });
    } catch(error) {
      this.logger.error(`updateUser: ${JSON.stringify(error, null, 4)}`);
      throw error;
    }
  }

  async deleteUser(input: DeleteUserInput): Promise<string> {
    try {
      await this.prisma.prismaUsers.delete({
        where: {
          id: input.id
        }
      });
      return `user with id: ${input.id} was succesfully deleted!`;
    } catch (error) {
      this.logger.error(`deleteUser: ${JSON.stringify(error, null, 4)}`);
      throw error;
    }
  }
}


