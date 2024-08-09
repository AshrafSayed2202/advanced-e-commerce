import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CheckoutForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            payment: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            address: Yup.string().required('Address is required'),
            payment: Yup.string().required('Payment method is required')
        }),
        onSubmit: values => {
            console.log(values);
            // Handle form submission
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
                {formik.errors.address ? <div>{formik.errors.address}</div> : null}
            </div>
            <div>
                <label htmlFor="payment">Payment Method</label>
                <select
                    id="payment"
                    name="payment"
                    onChange={formik.handleChange}
                    value={formik.values.payment}
                >
                    <option value="">Select</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                </select>
                {formik.errors.payment ? <div>{formik.errors.payment}</div> : null}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CheckoutForm;
