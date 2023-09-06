import {Args, Mutation, Query,Resolver} from '@nestjs/graphql';
import { CourseService } from './course.service';
import { Course, CourseInput } from '../graphql';


@Resolver()
export class CourseResolver {
  
  constructor(
    private readonly course: CourseService
  ){}
  
  @Query('courses')
  async courses(): Promise<Course[]> {
    return this.course.findCourses();
  }

  @Mutation('createCourse')
  async createCourse(@Args('data') input: CourseInput): Promise<Course> {
    return this.course.createCourse(input);
  }
}
