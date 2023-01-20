import React, { useState } from "react";
import UpdateStateTermImage from "./UpdateStateTermImage/UpdateStateTermImage";
import "./Termuploadimage.css";
const Termuploadimage = ({ setFieldValue, values, img }) => {
  const [Uimage, setUploadimage] = useState({});
  return (
    <div>
      <div className="termshow_file">
        Select Image
        <input
          className="termhide_file"
          type="file"
          name={img}
          accept="image/*"
          onChange={(e) =>
            setUploadimage({ ...Uimage, img: e.target.files[0] })
          }
        />
      </div>
      {Uimage?.img ? (
        <UpdateStateTermImage
          file={Uimage?.img}
          img={img}
          setFieldValue={setFieldValue}
        />
      ) : (
        ''
      )}

      {/* {console.log("kj",Uimage?.file)} */}
    </div>
  );
};

export default Termuploadimage;
