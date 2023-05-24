import { useLocation } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const { state } = useLocation();

  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          {[
            {
              title: "Personal information",
              content: {
                'First name': state.firstName,
                'Middle name': state.middleName,
                'Last name': state.lastName,
                'Email': state.email,
                'Gender': state.gender,
                'student': state.isStudent
              },
            },
            {
              title: "Residencial information",
              content: {
                'Address': state.address,
                'City': state.city,
                'State': state.state,
                'PostalCode': state.postalCode,
                'university': state.university,
                'subject': state.subject,
                'Was part of Rablo': state.hasPreviousConnect
              },
            },
          ].map((section) => {
            return (
              <>
                <div className={styles.section_wrapper} key={section.title}>
                  <p className={styles.header}>{section.title}</p>
                  <hr />
                  <div className={styles.content_wrapper}>
                    {Object.entries(section.content).map(([key, value]) => {
                      return (
                        <>
                          <p className={styles.content} key={key}>
                            <span className={styles.content_key}>{key}:</span>{" "}
                            <span className={styles.content_value}>
                              {value}
                            </span>
                          </p>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
