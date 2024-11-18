import React from "react";
import type { FieldApi } from "@tanstack/react-form";

interface InputFieldProps<TValue = string> {
  field: FieldApi<TValue, unknown, unknown, unknown>;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  field,
  placeholder,
}) => {
  return (
    <div className="flex flex-col input-container">
      <div className="input-container flex flex-col">
        <input
          className="input-field"
          id={field.name}
          name={field.label}
          value={field.state.value as string} // Assuming the value is a string
          placeholder={placeholder}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value as TValue)}
        />
        <span className="input-highlight"></span>
      </div>
      <div style={{ margin: "10px" }}>
        {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
          <em>{field.state.meta.errors.join(", ")}</em>
        )}
        {field.state.meta.isValidating && <span>Validating...</span>}
      </div>
    </div>
  );
};
