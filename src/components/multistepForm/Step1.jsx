import styles from "./MultiStep.module.css";

const Step1 = ({ updateForm, formData, validate, resetError, error }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Personal details</h1>
        <div className={styles.main}>
          {["firstName", "middleName", "lastName", "email", "age"].map(
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
              title: "Enter your gender (optional)",
              field: "gender",
              options: ["male", "female"],
            },
            {
              title: "Are you a student (optional)",
              field: "isStudent",
              options: ["yes", "no"],
            },
          ].map(({ title, field, options }) => {
            return (
              <div className={styles.radio}>
                <p className={styles.radio_label} key={field}>
                  {title}
                </p>
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

          <div>
            <input
              type="file"
              className={styles.file_upload}
              required
              onChange={() => updateForm({ field: "file", value: "input" })}
              onBlur={(e) => validate(["file"])}
              onFocus={(e) => resetError(["file"])}
            />
            <span
              className={styles.error}
              hidden={!error["file"] || error["file"].length === 0 }
            >
              {error["file"]}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
