import MultiStepForm from "../../components/multistepForm/MultiStepForm";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <MultiStepForm />
      </div>
    </div>
  );
};

export default Form;
