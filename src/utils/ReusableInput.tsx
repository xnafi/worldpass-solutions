import { InputProps } from "@/Types/allTypes";
import { div } from "framer-motion/client";
import React from "react";
interface InputFieldProps {
  label?: string;
  field: FieldApi<any, any, any, any>;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  field,
  placeholder,
}) => {
  return (
    <div className="flex flex-col input-container">
      <div className="input-container flex flex-col">
        <label className="input-label">{field.name}</label>
        <input
          className="input-field"
          id={field.name}
          name={field.label}
          value={field.state.value}
          placeholder={placeholder}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
        />
        <span className="input-highlight"></span>
      </div>
      <div style={{ margin:"10px"}}>
        {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
          <em>{field.state.meta.errors.join(", ")}</em>
        )}
        {field.state.meta.isValidating && <span>Validating...</span>}
      </div>
    </div>
  );
};
