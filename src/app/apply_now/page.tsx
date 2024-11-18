'use client'
import React from "react";
import { useForm } from "@tanstack/react-form";
import { InputField } from "@/utils/ReusableInput";
import PrimaryButton from "@/utils/PrimaryButton";


export default function Home() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value); // Handle form submission
    },
  });

  return (
    <div>
      <h1>Form with Reusable Input Component</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="firstName"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? "A first name is required"
                  : value.length < 3
                  ? "First name must be at least 3 characters"
                  : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in first name'
                );
              },
            }}
          >
            {(field) => (
              <InputField
                label="First Name"
                field={field}
                placeholder="Enter your first name"
              />
            )}
          </form.Field>
        </div>
        <div>
          <form.Field name="lastName">
            {(field) => (
              <InputField
                label="Last Name"
                field={field}
                placeholder="Enter your last name"
              />
            )}
          </form.Field>
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <PrimaryButton type="submit" disabled={!canSubmit}>
              {isSubmitting ? "..." : "Submit"}
            </PrimaryButton>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}
