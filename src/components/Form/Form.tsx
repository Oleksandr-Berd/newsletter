import { Formik } from 'formik';
import * as Yup from 'yup';

import * as SC from "./FormStyled"

interface IProps {
    submit: Function;
}


const SignupSchema = Yup.object().shape({

    email: Yup.string().email('Invalid email').required('Required'),
});


export const FormSubmit: React.FC<IProps> = ({ submit }) => {

    return (<div>
        <Formik

            initialValues={{
                email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, {resetForm}) => {
                submit(values)
                resetForm({
                    values: {
                        email: '',
                    },
                    errors: {},
                    touched: {},
                    status: null,
                });
            }}
        >
            {({ errors, touched }) => (
                <SC.CustomForm>
                    <SC.Label htmlFor="email">Email address</SC.Label>
                    <SC.Input name="email" type="email" placeholder="email@company.com" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <SC.SubmitButton type="submit">Subscribe to monthly newsletter</SC.SubmitButton>
                </SC.CustomForm>
            )}
        </Formik>
    </div>)
}





export default FormSubmit