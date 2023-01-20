import React, { useEffect } from "react";

const PreviewImage = ({ file, setFieldValue, values }) => {
  useEffect(() => {
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFieldValue("file", reader.result);
    };
  }, []);

  return <div className="w-100 h-40"></div>;
};

export default PreviewImage;
