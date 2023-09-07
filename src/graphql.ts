
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CourseInput {
    id: string;
    name: string;
    description: string;
    duration: string;
}

export class CourseUpdateInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    duration?: Nullable<string>;
}

export class CourseDeleteInput {
    id: string;
}

export class CreateUserInput {
    id: string;
    name: string;
    email: string;
}

export class UpdateUserInput {
    id: string;
    name: string;
}

export class DeleteUserInput {
    id: string;
}

export abstract class IQuery {
    abstract courses(): Nullable<Nullable<Course>[]> | Promise<Nullable<Nullable<Course>[]>>;

    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export class Course {
    id: string;
    name: string;
    description: string;
    duration: string;
}

export abstract class IMutation {
    abstract createCourse(data?: Nullable<CourseInput>): Nullable<Course> | Promise<Nullable<Course>>;

    abstract updateCourse(data?: Nullable<CourseUpdateInput>): Nullable<Course> | Promise<Nullable<Course>>;

    abstract deleteCourse(data?: Nullable<CourseDeleteInput>): Nullable<string> | Promise<Nullable<string>>;

    abstract createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(data?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(data?: Nullable<DeleteUserInput>): Nullable<string> | Promise<Nullable<string>>;
}

export class User {
    id: string;
    name: string;
    email: string;
}

type Nullable<T> = T | null;
