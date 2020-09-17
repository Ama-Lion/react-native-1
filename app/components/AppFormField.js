//*---------------MODULES--------------------
import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

//*---------------COMPONENTS --------------------
import AppTextInput from "./AppTextInput";

//*---------------FUNCTION--------------------
function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange("name")}
        onBlur={() => setFieldTouched("name")}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

//*---------------EXPORT FUNCTION--------------------
export default AppFormField;
