import styles from "./MultiStep.module.css";

const Step2 = ({ updateForm, formData, validate, resetError, error }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Registration details</h1>
        <div className={styles.main}>
          {["address", "city", "state", "postalCode", "university"].map(
            (field) => (
              <>
                <div className={styles[field]} key={field}>
                  <div className={`${styles.text_field}`}>
                    <input
                      type="text"
                      onChange={(e) =>
                        updateForm({ field, value: e.target.value })
                      }
                      value={formData[field]}
                      key={field}
                      className={styles.text_input}
                      placeholder=" "
                      onBlur={() => validate([field])}
                      onFocus={() => resetError([field])}
                    />
                    <label className={styles.label}>{field}</label>
                  </div>
                  <span
                    className={styles.error}
                    hidden={!error[field] || error[field].length === 0}
                  >
                    {error[field]}
                  </span>
                </div>
              </>
            )
          )}

          {[
            {
              title: "Have you been with us before (optional)",
              field: "hasPreviousConnect",
              options: ["yes", "no"],
            },
            {
              title: "Which subjects do you like (optional)",
              field: "subject",
              options: ["maths", "english", "science"],
            },
          ].map(({ title, field, options }) => {
            return (
              <div className={styles.radio} key={title}>
                <p className={styles.radio_label}>{title}</p>
                <div>
                  {options.map((option) => {
                    return (
                      <>
                        <input
                          value={option}
                          type="radio"
                          checked={formData[field]?.localeCompare(option) === 0}
                          onChange={(e) =>
                            updateForm({
                              field,
                              value: e.target.value,
                            })
                          }
                          id={option}
                          className={styles.radio_input}
                          key={field}
                        />
                        <label
                          htmlFor={option}
                          className={styles.radio_input_label}
                        >
                          {option}
                        </label>
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Step2;
