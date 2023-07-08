import React from "react";
import { useField } from "formik";
import styles from "./CustomSelect.module.scss";

interface inputProps {
  label: string;
  name: string;
  children: React.ReactNode;
}

const CustomSelect = ({ label, ...props }: inputProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="lg:inline-block relative w-full">
      <div className="mb-[20px] flex">
        <label className="mt-[8px] mr-[16px] w-[177px] text-right">
          {label}
        </label>
        <select
          {...field}
          {...props}
          className={`${styles["custom-select"]}`}
          // className={meta.touched && meta.error ? "input-error" : ""}
        />

        {/* {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )} */}
      </div>
    </div>
  );
};

export default CustomSelect;
