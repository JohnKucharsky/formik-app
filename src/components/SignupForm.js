import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function SignupForm() {
    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .min(2, "Must be 3 characters or more")
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
                lastName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
            })}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
                console.log(values);
            }}>
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field placeholder="First Name" name="firstName" type="text" />
                <br />
                <ErrorMessage name="firstName" />

                <label htmlFor="lastName">Last Name</label>
                <Field placeholder="Last Name" name="lastName" type="text" />
                <br />
                <ErrorMessage name="lastName" />

                <label htmlFor="email">First Name</label>
                <Field placeholder="Email" name="email" type="email" />
                <br />
                <ErrorMessage name="email" />
                <br />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}
