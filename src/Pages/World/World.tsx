import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const World = () => {
  const [count, setCount] = useState(0);
  const AddedElement = () => (
    <Formik
      initialValues={{
        worldName: "",
        environment: "",
        sessionPostType: "",
        music: "",
        instance: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
      validationSchema={Yup.object({
        worldName: Yup.string().max(125).required(),
        environment: Yup.string().required(),
        sessionPostType: Yup.string().required(),
        music: Yup.string().required(),
        instance: Yup.string().required(),
      })}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <span>World name</span>
            <Field
              type="text"
              name="worldName"
              className={errors.worldName && touched.worldName ? "error" : null}
            />
          </div>

          <div>
            <span>Environment</span>
            <Field
              as="select"
              name="environment"
              className={
                errors.environment && touched.environment ? "error" : null
              }
            >
              <option value="">-- Drop down to select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Field>
          </div>

          <div>
            <span>Session Post Type</span>
            <Field
              as="select"
              name="sessionPostType"
              className={
                errors.sessionPostType && touched.sessionPostType
                  ? "error"
                  : null
              }
            >
              <option value="">-- Drop down to select</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
          </div>

          <div>
            <span>Music (optional) </span>
            <Field
              as="select"
              name="music"
              className={errors.music && touched.music ? "error" : null}
            >
              <option value="">-- Drop down to select</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
          </div>

          <div>
            <span>Instance</span>
            <Field
              as="select"
              name="instance"
              className={errors.instance && touched.instance ? "error" : null}
            >
              <option value="">-- Drop down to select</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
          {/* <button onClick={() => setCount(count + 1)}>Add more element</button> */}
        </Form>
      )}
    </Formik>
  );
  return (
    <div>
      <h1>this is world page</h1>
      <Formik
        initialValues={{
          worldName: "",
          environment: "",
          sessionPostType: "",
          music: "",
          instance: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          worldName: Yup.string().max(125).required(),
          environment: Yup.string().required(),
          sessionPostType: Yup.string().required(),
          music: Yup.string().required(),
          instance: Yup.string().required(),
        })}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <span>World name</span>
              <Field
                type="text"
                name="worldName"
                className={
                  errors.worldName && touched.worldName ? "error" : null
                }
              />
            </div>

            <div>
              <span>Environment</span>
              <Field
                as="select"
                name="environment"
                className={
                  errors.environment && touched.environment ? "error" : null
                }
              >
                <option value="">-- Drop down to select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
            </div>

            <div>
              <span>Session Post Type</span>
              <Field
                as="select"
                name="sessionPostType"
                className={
                  errors.sessionPostType && touched.sessionPostType
                    ? "error"
                    : null
                }
              >
                <option value="">-- Drop down to select</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>

            <div>
              <span>Music (optional) </span>
              <Field
                as="select"
                name="music"
                className={errors.music && touched.music ? "error" : null}
              >
                <option value="">-- Drop down to select</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>

            <div>
              <span>Instance</span>
              <Field
                as="select"
                name="instance"
                className={errors.instance && touched.instance ? "error" : null}
              >
                <option value="">-- Drop down to select</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
      <button onClick={() => setCount(count + 1)}>Add more element</button>
      {[...Array(count)].map((_, i) => (
        <AddedElement key={i} />
      ))}
    </div>
  );
};

export default World;
