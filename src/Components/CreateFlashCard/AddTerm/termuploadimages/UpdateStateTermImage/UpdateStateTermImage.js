import React, { useEffect, useState } from "react";
const UpdateStateTermImage = ({ file, setFieldValue, img }) => {
  const [Uimage, setUploadimage] = useState({ file1: "" });

  useEffect(() => {
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFieldValue(img, reader.result);
      setUploadimage({ file1: reader.result });
    };
  }, []);

  return (
    <div>
      {file ? (
        <img
          src={Uimage.file1}
          alt="img"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default UpdateStateTermImage;
