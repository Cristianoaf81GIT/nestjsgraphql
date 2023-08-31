import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { PrismaService } from './prisma.service';

@Module({
  providers: [CourseResolver, CourseService, PrismaService]
})
export class CourseModule {}
