import React, { useState } from "react";
import { GrDocumentUpload } from "react-icons/gr";
import UpdateStateGroupImage from "../UpdateStateGroupImage/UpdateStateGroupImage";
function Uploadimage({ setFieldValue, errors, touched, values }) {
  const [Uimage, setUploadimage] = useState({ file1: "" });
  // const fileRef=useRef(null);

  return (
    <div>
      <div className="show_file">
        <label className=" flex flex-row bg-white text-blue rounded border border-black md:ml-2 mt-7 items-center pl-2 sm:w-full md:w-2/6">
          <GrDocumentUpload />
          <span className="p-2 text-base leading-normal">Upload Image</span>
          <input
            className="hidden"
            type="file"
            id="im"
            name="file"
            accept="image/*"
            onChange={(e) =>
              setUploadimage({ ...Uimage, file: e.target.files[0] })
            }
          />
        </label>
      </div>

      {Uimage?.file ? (
        <UpdateStateGroupImage
          file={Uimage?.file}
          setFieldValue={setFieldValue}
          values={values}
        />
      ) : (
        ""
      )}

      {values.file !== null ? <div>{errors.file}</div> : null}
    </div>
  );
}
export default Uploadimage;
