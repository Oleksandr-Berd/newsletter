import { Formik } from 'formik';
import * as Yup from 'yup';

import * as SC from "./FormStyled"

interface IProps {
    submit: (value: { email: string }) => void;
}


const SignupSchema = Yup.object().shape({

    email: Yup.string().email('Valid email required').required('Valid email required'),
});


export const FormSubmit: React.FC<IProps> = ({ submit }) => {

    return (
        <Formik

            initialValues={{
                email: '',
            }}
            validationSchema={SignupSchema}

            onSubmit={(values, { resetForm }) => {
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
                    <SC.LabelContainer>
                        <SC.Label htmlFor="email">Email address</SC.Label>
                        {errors.email && touched.email ? <SC.Error>{errors.email}</SC.Error> : null}
                    </SC.LabelContainer>
                    <SC.Input name="email" type="email" placeholder="email@company.com" errorStatus={errors.email ? "error" : undefined} />

                    <SC.SubmitButton type="submit" >Subscribe to monthly newsletter</SC.SubmitButton>
                </SC.CustomForm>
            )}
        </Formik>
   )
}

export default FormSubmit