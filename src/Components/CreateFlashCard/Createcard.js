import React from "react";
import { Formik, FieldArray } from "formik";
import { v4 as uuidv4 } from 'uuid';
import CreateGroup from "./CreateGroup/CreateGroup";
import AddTerm from "./AddTerm/AddTerm";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createflashcard } from "../../state/actions/card.js";
const Createcard = () => {
  const uuid=uuidv4 ();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    gname: Yup.string().required('required'),
    gdef: Yup.string()
      .required('required')
      .max(400, 'description must be less than 400 characters'),

    terms: Yup.array().of(
      Yup.object().shape({
        term: Yup.string().required('required'),
        desc: Yup.string()
          .required('required')
          .max(400, 'description must be less than 400 characters'),
      })
    ),
  });

  return (
    <div className="">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          gdef: '',
          gname: '',
          file: null,
          terms: [{ term: '', desc: '', img: null }],
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log({values,gid:uuid});

          setSubmitting(false);
          dispatch(createflashcard({...values,gid:uuid}));
        }}
      >
        {({
          handleChange,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          values,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <CreateGroup
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              values={values}
              handlechange={handleChange}
            />

            <div className=" mt-5 max-w-[1100px] mx-auto bg-white mb-2">
              {values?.gname === '' || values?.gdef === '' ? (
                <AddTerm
                  handlechange={handleChange}
                  errors={errors}
                  touched={touched}
                  disabled1="true"
                  term={values.terms[0].term}
                  desc={values.terms[0].desc}
                  img={values.terms[0].img}
                />
              ) : (
                <FieldArray
                  name="terms"
                  render={(arrayHelpers) => (
                    <div>
                      {values.terms && values.terms.length > 0 ? (
                        values.terms.map((term1, index) => (
                          <div key={index}>
                            <AddTerm
                              handlechange={handleChange}
                              setFieldValue={setFieldValue}
                              errors={errors}
                              touched={touched}
                              values={values}
                              arrayHelpers={arrayHelpers}
                              index={index}
                              img={`terms[${index}].img`}
                              term={`terms.[${index}].term`}
                              desc={`terms.[${index}].desc`}
                              disabled1="false"
                            />
                          </div>
                        ))
                      ) : (
                        <></>
                      )}
                      <div>
                        {values.gname !== '' &&
                        values.gdef !== ''  ? (
                          <button
                            className="text-sky-800 pl-6 pb-3 font-bold"
                            type="button"
                            onClick={() => arrayHelpers.push('')}
                          >
                            + Add more
                          </button>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  )}
                />
              )}
            </div>
            <div className="flex justify-center mb-5">
              <button
                type="submit"
                className="btn text-center mt-5 pl-12 pt-1 pb-1 pr-12 text-white bg-red-600"
                disabled={isSubmitting}
              >
                Create
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Createcard;
