import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useMultiStepForm = ({ forms, validator }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const updateForm = useCallback(
    ({ field, value }) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [setFormData]
  );

  const resetError = useCallback((fields) => {
    const results = {};

    fields.forEach((field) => {
      results[field] = "";
    });

    setError((prev) => ({ ...prev, ...results }));
  }, [setError]);

  const validate = useCallback(
    (fields) => {
      const results = {};

      fields.forEach((field) => {
        if (!validator[field]) return;

        if (
          !formData[field] ||
          !new RegExp(validator[field]?.pattern).test(formData[field])
        ) {
          results[field] = validator[field].message;
        } else {
          results[field] = "";
        }
      });

      setError((prev) => ({ ...prev, ...results }));
    },
    [setError, formData, validator]
  );

  const nextStep = useCallback(() => {
    validate(forms[currentStep]?.fields);

    if (Object.values(error).length === 0) return;

    for (const value of Object.values(error)) {
      if (value?.length !== 0) return;
    }

    if (currentStep >= forms?.length - 1) {
      navigate("/details", {
        state: formData,
      });

      return;
    }

    setCurrentStep((prev) => prev + 1);
  }, [setCurrentStep, currentStep, validate, error, navigate, formData, forms]);

  const prevStep = useCallback(() => {
    if (currentStep <= 0) return;
    setCurrentStep((prev) => prev - 1);
  }, [setCurrentStep, currentStep]);

  const hasNext = forms.length - 1 <= currentStep ? false : true;
  const hasPrev = currentStep < 0 ? false : true;
  const Component = forms[currentStep].component;

  return {
    formData,
    currentStep,
    nextStep,
    prevStep,
    Form: (
      <Component
        updateForm={updateForm}
        formData={formData}
        validate={validate}
        resetError={resetError}
        error={error}
      />
    ),
    hasNext,
    hasPrev,
    updateForm,
    error,
    validate,
  };
};

export default useMultiStepForm;
