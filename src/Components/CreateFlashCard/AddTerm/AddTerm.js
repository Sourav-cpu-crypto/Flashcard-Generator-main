import React, { useRef } from 'react';
import { Field } from 'formik';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import Termuploadimage from './termuploadimages/Termuploadimage';
function AddTerm({
  handlechange,
  term,
  desc,
  disabled1,
  img,
  arrayHelpers,
  index,
  setFieldValue,
  onClick1,
  values,
  errors,
  touched,
}) {
  const focustext = useRef();
  const Edit = () => {
    focustext.current.focus();
  };
  console.log('imgfield', img);
  console.log('termfield', term);

  return (
    <>
      <div className="mt-5 max-w-[1100px] mx-auto bg-white pl-7 pt-7">
        <div className="grid sm:grid-rows md:grid-cols-3 gap-5 ">
          <div className="flex flex-row">
            <div>
              <h2 className="bg-red-600 rounded-full pl-3 text-white pr-5 w-4 h-7 mr-3">
                {disabled1 === 'true' ? '1' : index + 1}
              </h2>
            </div>
            <div>
              <h3>Enter Term*</h3>
              {disabled1 === 'true' ? (
                <Field
                  name="term"
                  className="rounded-md mb-3 border-2 border-current p-2 w-full"
                  placeholder="write the name of group"
                  disabled
                />
              ) : (
                <input
                  onChange={handlechange}
                  type={'text'}
                  ref={focustext}
                  name={term}
                  className="rounded-md mb-3 border-2 border-current p-4 w-full grow "
                  placeholder="write the name of group"
                />
              )}
              {errors.terms &&
              errors.terms[index] &&
              errors.terms[index].term &&
              touched.terms &&
              touched.terms[index] &&
              touched.terms[index].term ? (
                <div>{errors.terms[index].term}</div>
              ) : null}
            </div>
          </div>
          <div>
            <h3>Enter Defination*</h3>
            {disabled1 === 'true' ? (
              <textarea
                type={'text'}
                name="desc"
                onChange={handlechange}
                className="rounded-md mb-3 border-2 border-current pl-2 w-full"
                placeholder="add description of the group"
                disabled
              />
            ) : (
              <textarea
                type={'text'}
                name={desc}
                onChange={handlechange}
                className="rounded-md mb-3 border-2 border-current p-2 w-full"
                placeholder="add description of the group"
              />
            )}
            {errors.terms &&
            errors.terms[index] &&
            errors.terms[index].desc &&
            touched.terms &&
            touched.terms[index] &&
            touched.terms[index].desc ? (
              <div>{errors.terms[index].desc}</div>
            ) : null}
          </div>
          <div className="flex">
            {disabled1 === 'true' ? (
              <button
                type="button"
                className=" bg-white text-blue justify-center rounded border border-black mt-6 mb-4 pl-4 pr-4 items-center"
                disabled
              >
                Select Image
              </button>
            ) : (
              <>
                {values?.terms[index].img ? (
                  <div>
                  <img width="120px" src={values.terms[index].img} alt="" />
                  <button onClick={()=>{setFieldValue(img,"")}}>close</button>
                  </div>
                
                
              
                ) : (
                  <Termuploadimage
                    setFieldValue={setFieldValue}
                    values={values}
                    img={img}
                  />
                )}
              </>
            )}
            <div>
              {disabled1 === 'true' ? (
                <></>
              ) : (
                <div className="mt-3 ml-5">
                  <div>
                    <button onClick={Edit}>
                      <FiEdit />
                    </button>
                  </div>
                  <div>
                    {values.terms.length === 1 ? (
                      ''
                    ) : (
                      <button onClick={() => arrayHelpers.remove(index)}>
                        <RiDeleteBin6Line />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTerm;
