import React, { BaseSyntheticEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { CustomInput } from '../../modules/inputs/CustomInput';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { IDelivery } from '../../utils/types/delivery';
import css from './DeliveryPage.module.scss';

export const data: IDelivery[] = [
    {
        id: 1,
        label: 'ФИО',
        value: '',
    },
    {
        id: 2,
        label: 'Телефон',
        value: '',
    },
    {
        id: 3,
        label: 'Адрес доставки',
        value: '',
    },
];

export type DeliveryPageProps = any;

export const DeliveryPage: FC<DeliveryPageProps> = () => {
    useBackButton('/');

    const [formData, setFormData] = useState<IDelivery[]>(data.map((item) => ({ ...item, value: '' })));

    const handleInputChange = (id: number) => (e: BaseSyntheticEvent) => {
        const newValue = e.target.value;

        setFormData((prevFormData) =>
            prevFormData.map((item) => (item.id === id ? { ...item, value: newValue } : item))
        );
    };

    return (
        <div className={css.deliveryPage}>
            <HeaderPage title="Данные для доставки книги" className={css.deliveryHeader} />
            <div className={css.deliveryForm}>
                {formData?.map((item) => (
                    <CustomInput
                        key={item.id}
                        label={item.label}
                        type="text"
                        value={item.value}
                        onChange={handleInputChange(+item.id)}
                    />
                ))}
                <Link to="/" className={css.contentPriceButton}>
                    <div className={css.contentPriceLink}>
                        <div className={css.contentPriceText}>Перейти к оплате</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
