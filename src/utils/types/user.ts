// todo fix types, this is just examples

export type UserRole = 'all' | 'student' | 'subscriber' | 'graduate';

export type IUserCourse = {
    role: UserRole;
    currentLesson: number;
};

export type IUser = {
    _id: string;
    id: number;
    avatar?: string;
    username: string;
    first_name: string;
    is_bot?: boolean;
    language_code?: string;
    course: IUserCourse;
};
