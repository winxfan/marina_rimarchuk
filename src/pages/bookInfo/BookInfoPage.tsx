import BookInfo from '@/pages/main/components/parts/BookInfo';
import { useBackButton } from '@/utils/hooks/useBackButton';

const BookInfoPage = () => {
    useBackButton('/');

    return <BookInfo />;
};

export default BookInfoPage;
