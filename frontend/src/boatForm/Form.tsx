import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  FormikHelpers,
} from 'formik';
import { ReactElement, useContext } from 'react';
import { InputBoat } from '../Boat';
import * as Yup from 'yup';
import { BoatContext } from '../BoatContext';

const initialBoat: InputBoat = {
  color: '',
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
  const [, setBoats] = useContext(BoatContext);

  function handleSubmit(
    values: InputBoat,
    { setSubmitting, resetForm }: FormikHelpers<InputBoat>,
  ): void {
    fetch('http://localhost:8080/boats', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((response) => {
        setSubmitting(false);
        if (response.ok) {
          resetForm();
          return response.json();
        } else {
          alert('Fehler beim Speichern');
          return;
        }
      })
      .then((newBoat) => {
        if (newBoat) {
          setBoats((prevBoats) => [...prevBoats, newBoat]);
        }
      });
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
