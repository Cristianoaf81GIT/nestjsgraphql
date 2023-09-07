import {Args, Mutation, Query,Resolver} from '@nestjs/graphql';
import { CourseService } from './course.service';
import { Course, CourseInput, CourseDeleteInput, CourseUpdateInput } from '../graphql';


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

  @Mutation('updateCourse')
  async updateCourse(@Args('data') input: CourseUpdateInput): Promise<Course> {
    return this.course.updateCourse(input);
  }

  @Mutation('deleteCourse')
  async deleteCourse(@Args('data') input: CourseDeleteInput): Promise<string> {
    return this.course.deleteCourse(input);
  }
}
