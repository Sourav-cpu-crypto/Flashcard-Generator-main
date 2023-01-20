import React from "react";
import UploadImage from "./uploadimages/Uploadimage";

function CreateGroup({
  handlechange,
  errors,
  touched,
  setFieldValue,
  values,
  onChange,
}) {
  return (
    <div className="mt-5 max-w-[1100px] mx-auto bg-white p-7 ">
      <div className="grid sm:grid-rows md:grid-cols-2">
        <div>
          <h3>Create Group*</h3>
          <input
            type={'text'}
            id="gname"
            name="gname"
            className="rounded-md w-full mb-3 border-2 border-current p-2 "
            placeholder="write the name of group"
            onChange={handlechange}
          ></input>
          {errors.gname && touched.gname ? errors.gname : null}
        </div>
        <div className="ml-7">
          {values?.file ? (
            <div>
            <img src={values.file} name="file" height="50px" width="150px" alt="" />
            <button onClick={()=>{setFieldValue("file","")}}>close</button>
            </div>
          ) : (
            <UploadImage
              setFieldValue={setFieldValue}
              values={values}
              errors={errors}
            />
          )}
        </div>
      </div>
      <div className="mt-3">
        <h3>Add Description</h3>
        <textarea
          type={'text'}
          id="Description"
          name="gdef"
          className="rounded-md h-16 border-2 border-current p-2 w-full"
          placeholder="add description of the group"
          onChange={handlechange}
        ></textarea>
        {errors.gdef && touched.gdef ? errors.gdef : null}
      </div>
    </div>
  );
}
export default CreateGroup;
