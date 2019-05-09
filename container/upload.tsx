import * as React from "react";
import uuid from "uuid/v3";

export const Upload: React.FunctionComponent = (): JSX.Element => {
  const [colorFile, setFile] = React.useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.currentTarget.files[0];
    const reader: FileReader = new FileReader();
    reader.onloadend = () => {
      setFile(file);
    };
    reader.readAsText(file);
  };
  return (
    <>
      <input
        accept=".json, application/json, text/plain"
        id={uuid("upload", "1b671a64-40d5-491e-99b0-da01ff1f3341")}
        multiple={false}
        onChange={handleChange}
        type="file"
      />
    </>
  );
};
