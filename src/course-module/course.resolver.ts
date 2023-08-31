import {Query,Resolver} from '@nestjs/graphql';
import { CourseService } from './course.service';
import { Course } from 'src/graphql';


@Resolver()
export class CourseResolver {
  
  constructor(
    private readonly course: CourseService
  ){}
  
  @Query('courses')
  async courses(): Promise<Course[]> {
    return this.course.findCourses();
  }
}
