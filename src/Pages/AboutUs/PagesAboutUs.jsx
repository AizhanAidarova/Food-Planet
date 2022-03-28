import React from "react";
import styles from "./PagesAboutUs.module.css";
import { about } from "../../Constant/Constant";

const PagesAboutUs = () => {
  return (
    <>
      <div style={{ maxWidth: "1600px" }} className={styles.aboutUsWidth}>
        <div style={{ maxWidth: "1120px" }}>
          <h3>Почему выбирают нас:</h3>
          <div className={styles.fourAboutUs}>
            {about.map((item) => {
              return (
                  <div className={styles.aboutUs}>
                    <img src={item.img} alt="" />
                    <h2>{item.reasons}</h2>
                    <p>{item.reasonsInDetail}</p>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesAboutUs;
