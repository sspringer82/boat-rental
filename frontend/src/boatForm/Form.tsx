import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  FormikHelpers,
} from 'formik';
import { ReactElement } from 'react';
import { InputBoat } from '../Boat';
import * as Yup from 'yup';
import useBoats from '../useBoats';

const initialBoat: InputBoat = {
  color: '#000000',
  brand: '',
  name: '',
};

const validationSchema = Yup.object().shape({
  color: Yup.string().required('Pflichtfeld!'),
  brand: Yup.string().required('Pflichtfeld!'),
  name: Yup.string()
    .min(3, 'Name muss mindestens 3 Zeichen sein')
    .max(20, 'Name darf maximal 20 Zeichen sein')
    .required('Pflichtfeld!'),
});

const Form = (): ReactElement => {
  const { handleSave } = useBoats();
  async function handleSubmit(
    values: InputBoat,
    { setSubmitting, resetForm }: FormikHelpers<InputBoat>,
  ): Promise<void> {
    const result = await handleSave(values);
    setSubmitting(false);
    if (result) {
      resetForm();
    }
  }
  return (
    <Formik
      initialValues={initialBoat}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => {
        return (
          <FormikForm>
            <fieldset>
              <label>
                Farbe
                <Field type="color" name="color" />
              </label>
              <ErrorMessage name="color" component="div" />
            </fieldset>
            <fieldset>
              <label>
                Marke
                <Field type="text" name="brand" />
              </label>
              <ErrorMessage name="brand" component="div" />
            </fieldset>
            <fieldset>
              <label>
                Name
                <Field type="text" name="name" />
              </label>
              <ErrorMessage name="name" component="div" />
            </fieldset>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;
