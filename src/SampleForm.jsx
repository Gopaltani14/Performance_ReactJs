import { Dropdown, Form, TextInput } from "@carbon/react";
import React from "react";

// formConfig.js
export const formFields = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter first name",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter last name",
  },
  {
    id: "email",
    label: "Email",
    type: "text",
    placeholder: "Enter email address",
  },
  {
    id: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Enter phone number",
  },
  {
    id: "gender",
    label: "Gender",
    type: "dropdown",
    options: ["Male", "Female", "Other"],
  },
  {
    id: "country",
    label: "Country",
    type: "dropdown",
    options: ["USA", "India", "Germany", "Australia"],
  },
  { id: "state", label: "State", type: "text", placeholder: "Enter state" },
  { id: "city", label: "City", type: "text", placeholder: "Enter city" },
  { id: "zip", label: "ZIP Code", type: "text", placeholder: "Enter ZIP code" },
  {
    id: "occupation",
    label: "Occupation",
    type: "text",
    placeholder: "Enter occupation",
  },
  {
    id: "experience",
    label: "Experience Level",
    type: "dropdown",
    options: ["Junior", "Mid", "Senior", "Lead"],
  },
  {
    id: "language",
    label: "Preferred Language",
    type: "dropdown",
    options: ["English", "Hindi", "German", "Spanish"],
  },
  {
    id: "education",
    label: "Education Level",
    type: "dropdown",
    options: ["High School", "Bachelor", "Master", "PhD"],
  },
  {
    id: "dob",
    label: "Date of Birth",
    type: "text",
    placeholder: "YYYY-MM-DD",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    type: "text",
    placeholder: "Enter LinkedIn profile link",
  },
  {
    id: "github",
    label: "GitHub",
    type: "text",
    placeholder: "Enter GitHub profile link",
  },
  {
    id: "twitter",
    label: "Twitter",
    type: "text",
    placeholder: "Enter Twitter handle",
  },
  {
    id: "status",
    label: "Employment Status",
    type: "dropdown",
    options: ["Employed", "Unemployed", "Student"],
  },
  {
    id: "relocate",
    label: "Willing to Relocate?",
    type: "dropdown",
    options: ["Yes", "No"],
  },
  {
    id: "portfolio",
    label: "Portfolio URL",
    type: "text",
    placeholder: "Enter portfolio URL",
  },
];

function SampleForm() {
  return (
    <div>
      <div>
        <Form
          style={{
            margin: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {formFields.map((field) => {
            if (field.type === "text") {
              return (
                <div key={field.id} style={{ width: "250px" }}>
                  <TextInput
                    key={field.id}
                    id={field.id}
                    labelText={field.label}
                    placeholder={field.placeholder}
                  />
                </div>
              );
            }

            if (field.type === "dropdown") {
              return (
                <div key={field.id} style={{ width: "250px" }}>
                  <Dropdown
                    key={field.id}
                    id={field.id}
                    titleText={field.label}
                    label="Select an option"
                    items={field.options}
                    itemToString={(item) => item}
                  />
                </div>
              );
            }
          })}
        </Form>
      </div>
    </div>
  );
}

export default SampleForm;
