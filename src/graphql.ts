
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

export class CreateUserInput {
    id: string;
    name: string;
    email: string;
}

export class UpdateUserInput {
    id: string;
    name: string;
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

    abstract createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(data?: Nullable<UpdateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    name: string;
    email: string;
}

type Nullable<T> = T | null;
