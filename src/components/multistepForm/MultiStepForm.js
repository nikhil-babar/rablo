import React from "react";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import Step1 from "./Step1";
import Step2 from "./Step2";
import styles from "./MultiStep.module.css";
import ProgressBar from "@ramonak/react-progress-bar";

const formInputs = {
  firstName: {
    pattern: "^[A-Za-z]+$",
    message: "First name must contain only letters.",
  },
  lastName: {
    pattern: "^[A-Za-z]+$",
    message: "Last name must contain only letters.",
  },
  middleName: {
    pattern: "^[A-Za-z]+$",
    message: "Middle name must contain only letters.",
  },
  email: {
    pattern: "^[A-Za-z][A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$",
    message: "Please enter a valid email address.",
  },
  username: {
    pattern: "^[A-Za-z][A-Za-z0-9_]*$",
    message:
      "Username must start with a letter and can only contain letters, numbers, and underscores.",
  },
  password: {
    pattern: "^.{8,}$",
    message: "Password must be at least 8 characters long.",
  },
  contact: {
    pattern: "^\\d+$",
    message: "Contact number must contain only digits.",
  },
  address: {
    pattern: "^[\\w\\s\\d]+$",
    message: "Address can only contain letters, numbers, and spaces.",
  },
  city: {
    pattern: "^[A-Za-z\\s]+$",
    message: "City name must contain only letters and spaces.",
  },
  state: {
    pattern: "^[A-Za-z\\s]+$",
    message: "State name must contain only letters and spaces.",
  },
  postalCode: {
    pattern: "^[A-Za-z0-9]+$",
    message: "Postal code must contain only letters and numbers.",
  },
  age: {
    pattern: "\\d+",
    message: "Please enter a valid age.",
  },
  university: {
    pattern: "^[A-Za-z\\s]+$",
    message: "University name must contain only letters and spaces.",
  },
};

const MultiStepForm = () => {
  const { Form, nextStep, prevStep, hasPrev, hasNext } = useMultiStepForm({
    forms: [
      {
        component: Step1,
        fields: [
          "firstName",
          "middleName",
          "lastName",
          "email",
          "age",
          "gender",
          "isStudent",
        ],
      },
      {
        component: Step2,
        fields: [
          "address",
          "city",
          "state",
          "university",
          "postalCode",
          "hasPreviousConnect",
          "subject",
        ],
      },
    ],
    validator: formInputs,
  });

  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.progress_bar}>
          <ProgressBar completed={hasNext ? 20 : 80} maxCompleted={100} />
        </div>
        <div>{Form}</div>
        <div className={styles.button_wrapper}>
          <button onClick={prevStep} disabled={!hasPrev}>
            Previous step
          </button>
          {hasNext ? (
            <button onClick={nextStep}>Next step</button>
          ) : (
            <button onClick={nextStep}>Submit</button>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
