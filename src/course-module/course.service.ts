import {Injectable, Logger} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Course, CourseDeleteInput, CourseInput, CourseUpdateInput } from '../graphql';

@Injectable()
export class CourseService {
  
  private logger: Logger = new Logger(CourseService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findCourses(): Promise<Course[]> {
    this.logger.log('findCourses');
    return this.prisma.courses.findMany({});
  }

  async createCourse(input: CourseInput): Promise<Course> {
    try {
      return this.prisma.courses.create({data: input});
    } catch(error) {
      this.logger.error(`createCourse: ${JSON.stringify(error, null, 4)}`);
      throw error;
    }
  }

  async updateCourse(input: CourseUpdateInput): Promise<Course> {
    try {
      const courseUpdateData = {...input};
      delete courseUpdateData.id;
      return this.prisma.courses.update({
        where: {
          id: input.id,
        },
        data: {...courseUpdateData}
      });
    } catch(error) {
      this.logger.error(`updateCourse: ${JSON.stringify(error, null, 4)}`);
      throw error;
    }
  }

  async deleteCourse(input: CourseDeleteInput): Promise<string> {
    try {
      await this.prisma.courses.delete({
        where: {
          id: input.id
        }
      });
      return `course with id: ${input.id} was successfully deleted!`;
    } catch (error) {
      this.logger.error(`deleteCourse: ${JSON.stringify(error, null, 4)}`);
      throw error;
    }
  }
}
