import { CustomInput } from '../../modules/inputs/CustomInput';
import { useBackButton } from '../../utils/hooks/useBackButton';
import css from './DeliveryPage.module.scss';
import { IAddress, useDeliveryPage } from './useDeliveryPage';

export const DeliveryPage = () => {
    useBackButton('/');

    const {
        values: {
            formik: { handleChange, handleSubmit, values, errors },
        },
    } = useDeliveryPage();

    const formFieldTitle: Record<keyof IAddress, string> = {
        name: 'ФИО',
        phone: 'Телефон',
        address: 'Адрес доставки',
    };

    return (
        <div className={css.deliveryPage}>
            <h1 className={css.deliveryHeader}>Данные для доставки книги</h1>

            <form className={css.deliveryForm} onSubmit={handleSubmit}>
                {Object.keys(formFieldTitle).map((key) => (
                    <CustomInput
                        key={key}
                        name={key}
                        value={values[key as keyof IAddress]}
                        title={formFieldTitle[key as keyof IAddress]}
                        error={errors[key as keyof IAddress]}
                        onChange={handleChange}
                    />
                ))}
                <button type="submit" className={css.contentPriceButton}>
                    Перейти к оплате
                </button>
            </form>
        </div>
    );
};
