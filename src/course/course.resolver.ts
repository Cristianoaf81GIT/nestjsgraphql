import {Query,Resolver} from '@nestjs/graphql';

export class CourseResolver {

  @Query('course')
  async courses() {

  }
}
