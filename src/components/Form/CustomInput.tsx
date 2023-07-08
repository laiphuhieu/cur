import React from "react";
import { useField } from "formik";
import styles from "./CustomInput.module.scss";

interface inputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

const CustomInput = ({ label, ...props }: inputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="lg:inline-block relative w-full">
      <div className="mb-[20px] flex">
        <label className="mt-[8px] mr-[16px] w-[177px] text-right">
          {label}
        </label>
        <textarea
          {...field}
          {...props}
          className={`${styles["custom-input"]}`}
          // className={meta.touched && meta.error ? "input-error" : ""}
        />
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
