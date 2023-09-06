import {Injectable, Logger} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Course, CourseInput } from '../graphql';

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
}
