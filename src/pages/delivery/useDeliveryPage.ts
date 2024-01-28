import { useFormik } from 'formik';
import * as yup from 'yup';

export interface IAddress {
    name: string;
    phone: string;
    address: string;
}

export const useDeliveryPage = () => {
    const validationSchema = yup.object().shape({
        name: yup.string().required('ФИО обязательно к заполнению'),
        address: yup.string().required('Адрес обязателен к заполнению'),
        // todo set phone mask
        phone: yup.string().required('Номер телефона обязателен к заполнению').min(12, 'Минимум 12 символов'),
    });

    const formik = useFormik<IAddress>({
        initialValues: {
            name: '',
            address: '',
            phone: '+7',
        },
        validationSchema,
        validateOnChange: true,
        validateOnMount: false,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return {
        values: {
            formik,
        },
    };
};
