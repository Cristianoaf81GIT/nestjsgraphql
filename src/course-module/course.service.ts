import {Injectable, Logger} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Course } from 'src/graphql';

@Injectable()
export class CourseService {
  
  private logger: Logger = new Logger(CourseService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findCourses(): Promise<Course[]> {
    this.logger.log('findCourses');
    return this.prisma.courses.findMany({});
  }
}
