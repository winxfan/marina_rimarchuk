import { CourseInfo } from '@/pages/courses/component/parts/CourseInfo';
import { useBackButton } from '@/utils/hooks/useBackButton';

const CourseInfoPage = () => {
    useBackButton('/');
    return <CourseInfo />;
};

export default CourseInfoPage;
