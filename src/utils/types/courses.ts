export interface ICoursesCard {
    title: string;
    description?: string;
    id: string | number;
}

export interface ICourses {
    id: string | number;
    title: string;
    card: ICoursesCard[];
}
